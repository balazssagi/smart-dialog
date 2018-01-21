import config from './rollup.config'

export default Object.assign({}, config, {
  output: {
    file: './dist/smart-dialog.es.js',
    format: 'es',
  },
})
