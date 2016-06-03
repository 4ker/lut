# lut #

![Lookup Table](https://raw.github.com/hughsk/lut/master/image.png)

Renders [RGB lookup tables](http://the-witness.net/news/2012/08/fun-with-in-engine-color-grading/) to a canvas element.

## Installation ##

``` bash
npm install lut
```

## Manual

1.  install [Node.js](https://nodejs.org/en/)
    +   <https://nodejs.org/dist/v4.4.5/node-v4.4.5-x64.msi>
    +   [Package - cnpm](https://npm.taobao.org/package/cnpm): `npm install cnpm -g --registry=https://registry.npm.taobao.org`
2.  install [Browserify](http://browserify.org/): `cnpm install -g browserify`
3.  `browserify demo.js -o bundle.js`
4.  open `index.html` in your browser, or <http://district10.github.io/lut>

## Usage ##

`lut(red, green, blue, canvas)`

``` javascript
var lut = require('lut')
  , canvas = document.createElement('canvas')

// Defaults to 32x32x32, creating a new canvas element:
document.body.appendChild(lut())

// But you can render on top of an existing canvas,
// and specify the resolution (number of shades) for
// each colour too:
document.body.appendChild(canvas)
lut(64, 8, 128, canvas)
```
