// in index.js
//
//      function lut(){...}
//      module.exports = lut

// require/include this function
var lut = require('./') // will include `index.js`
  , canvas = lut()      // call it, use default settings

document.body.appendChild(canvas)
