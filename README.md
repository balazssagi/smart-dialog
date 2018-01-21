# Smart Dialog

A small wrapper around the native [ HTML \<dialog\> element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement), adding support for restoring focus after close, and closing by clicking on the backdrop. It includes the [dialog-polyfill by Google](https://github.com/GoogleChrome/dialog-polyfill).

**Note:** This library doesn't yet support `form` elements with the attribute `method="dialog"` inside dialogs.

## Installation

Install from npm:

```
npm install smart-dialog --save
```

Or download the repo, and include the `smart-dialog.js` file from the `dist` folder:

```html
<script src="PATH/TO/smart-dialog.js"></script>
```

## Usage

Create an instance by passing a `dialog` element and an optional options object to the `SmartDialog` constructor:

```javascript
const myDialog = new SmartDialog(document.getElementById('my-dialog'), options)
```

The available options are

* `handleFocus`: Boolean. Defaults to true
* `handleBackdropClick`: Boolean. Defaults to true

For example:

```javascript
const myDialog = new SmartDialog(document.getElementById('my-dialog'), {
  handleFocus: false,
})
```

The exposed API is mostly the same as for the [HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement), so please refer to that for details.

Available properties:

* `open`
* `returnValue`

Additionally you can access the underlying `dialog` element with the `element` property.

Available methods:

* `close()`
* `show()`
* `showModal()`

**Note:** Check out the example folder for a usage example.
