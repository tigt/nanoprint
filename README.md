# Nanoprint

Nanoprint accepts some data and creates a short string, for [file fingerprinting](http://guides.rubyonrails.org/asset_pipeline.html#what-is-fingerprinting-and-why-should-i-care-questionmark).

Specifically, 7 characters of URL-safe Base64, which is 42 bits of entropy — combined with the filename, you should “never” have collisions.

| Method          | Fingerprint                        |
|-----------------|------------------------------------|
| Full hex string | `908e25f4bf641868d8683022a5b62f54` |
| [rev-hash](https://github.com/sindresorhus/rev-hash) | `bb9d8fe615` |
| Nanoprint       | `Q4-jgzM` |

Is this a huge performance improvement? No, but it’s shorter and compresses slightly better for some reason.

## Usage

You can pass `nanoprint` a string or a [Buffer](https://nodejs.org/api/buffer.html#buffer_buffer).

```js
var nanoprint = require('nanoprint');
nanoprint('html{display:none/* The fastest render is no render */}');
// → "fQT8IeT"

var fs = require('fs');
var pngFile = fs.readFileSync('path/to/some.png');
nanoprint(pngFile);
// → something like "ZW5kZXI"
```

You can also specify a hashing algorithm like this: `nanoprint(data, 'sha256')`. (Why? Better gzipping with Subresource Integrity, I guess. I’m not your dad.)
