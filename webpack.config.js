const path = require('path');

var defaultConfig = {
  mode: 'production',
}

var _92p6Config = Object.assign({}, defaultConfig, {
  entry: './src/92.6%+/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '92.6/impression.js',
  }
})

var _92p6WithOffConfig = Object.assign({}, defaultConfig, {
  entry: './src/92.6%+/index+off.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '92.6/impression+off.js',
  }
})

module.exports = [
  _92p6Config, _92p6WithOffConfig
];
