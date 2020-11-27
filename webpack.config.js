const path = require('path');

var defaultConfig = {
  mode: 'production',
}

var _92p6Config = Object.assign({}, defaultConfig, {
  entry: './src/index-92.6+.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'impression-92.6+.js',
  }
})

var _92p6WithOffConfig = Object.assign({}, defaultConfig, {
  entry: './src/index+off-92.6+.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'impression+off-92.6+.js',
  }
})

module.exports = [
  _92p6Config, _92p6WithOffConfig
];
