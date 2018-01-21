import config from './rollup.config'
import uglify from 'rollup-plugin-uglify'

const newConfig = Object.assign({}, config, {
  output: {
    file: './dist/smart-dialog.js',
    format: 'umd',
    name: 'SmartDialog',
  },
})

newConfig.plugins.push(uglify())

export default newConfig
