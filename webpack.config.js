const path = require('path');

var defaultConfig = {
  mode: 'production'
}

var _92p3Config = Object.assign({}, defaultConfig, {
  entry: './src/92%+/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '92+/impression.min.js',
  },
})

var _92p3WithOffConfig = Object.assign({}, defaultConfig, {
  entry: './src/92%+/index+off.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '92+/impression+off.min.js',
  },
})


module.exports = [
  _92p3Config,
  _92p3WithOffConfig
];
