var crypto = require('crypto')

var rx = /[+/]/g

function replacer (char) {
  return char === '/' ? '-' : '_'
}

function nanoprint (bufferOrString, algo = 'md5') {
  return crypto.createHash(algo)
               .update(bufferOrString)
               .digest('base64')
               .substring(0, 7)
               .replace(rx, replacer)
}

module.exports = nanoprint
