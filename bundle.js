(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// in index.js
//
//      function lut(){...}
//      module.exports = lut

// require/include this function
var lut = require('./') // will include `index.js`
  , canvas = lut()      // call it, use default settings

document.body.appendChild(canvas)

},{"./":2}],2:[function(require,module,exports){
function lut(red, green, blue, canvas) {
  var red = red || 32, green = green || 32, blue = blue || 32

  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.width = red * blue
    canvas.height = green
  }

  var r, g, b, x, y
  var ctx = canvas.getContext('2d')
    , width = red * blue
    , height = green
    , data = ctx.getImageData(0, 0, width, height)

  for (r = 0; r < red; r += 1) {
    for (g = 0; g < green; g += 1) {
      for (b = 0; b < blue; b += 1) {
        x = r + b * red
        y = green - g - 1
        data.data[(x + y * width)*4    ] = 255 * (r+0.5) / red
        data.data[(x + y * width)*4 + 1] = 255 * (g+0.5) / green
        data.data[(x + y * width)*4 + 2] = 255 * (b+0.5) / blue
        data.data[(x + y * width)*4 + 3] = 255 // Alpha Channel
      }
    }
  }

  ctx.putImageData(data, 0, 0)

  return canvas
};

module.exports = lut

},{}]},{},[1]);
