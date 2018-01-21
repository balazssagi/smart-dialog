import dialogPolyfill from 'dialog-polyfill'
import 'dialog-polyfill/dialog-polyfill.css'

function isValidElement(element) {
  if (!element || element.nodeName !== 'DIALOG') {
    return false
  }
  return true
}

function isClickInsideDialog(element, event) {
  // fixes a keyboard user bug
  if (event.clientX === 0 && event.clientY === 0) {
    return false
  }

  const rect = element.getBoundingClientRect()
  return !(
    rect.top <= event.clientY &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width &&
    event.clientY <= rect.top + rect.height
  )
}

export default function SmartDialog(element, options) {
  if (!isValidElement(element)) {
    throw new Error(
      "Passed element is invalid. You should pass a 'dialog' element."
    )
  }

  dialogPolyfill.registerDialog(element)

  this.options = Object.assign(
    {},
    {
      handleFocus: true,
      handleBackdropClick: true,
    },
    options
  )

  this.element = element
  this.prevFocusElement = null

  if (this.options.handleBackdropClick) {
    this.element.addEventListener(
      'click',
      function(event) {
        if (isClickInsideDialog(element, event)) {
          this.close()
        }
      }.bind(this)
    )
  }

  if (this.options.handleFocus) {
    this.element.addEventListener(
      'close',
      function() {
        this.prevFocusElement.focus()
      }.bind(this)
    )
  }
}

SmartDialog.prototype.showModal = function() {
  this.prevFocusElement = document.activeElement
  this.element.showModal()
}

SmartDialog.prototype.show = function() {
  this.element.show()
}

SmartDialog.prototype.close = function(returnValue) {
  this.element.close(returnValue)
}

Object.defineProperty(SmartDialog.prototype, 'returnValue', {
  get() {
    return this.element.returnValue
  },
})

Object.defineProperty(SmartDialog.prototype, 'open', {
  get() {
    return this.element.open
  },
})
