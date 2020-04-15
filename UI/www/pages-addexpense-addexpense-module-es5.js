(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addexpense-addexpense-module"],{

/***/ "./node_modules/google-maps/lib/Google.js":
/*!************************************************!*\
  !*** ./node_modules/google-maps/lib/Google.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.31';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		if (GoogleMapsLoader.VERSION) {
			url += '&v=' + GoogleMapsLoader.VERSION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addexpense/addexpense.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addexpense/addexpense.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n<!--    <ion-title>addexpense</ion-title>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n            <ion-card>\n              <div class=\"center\" *ngIf=\"!isEdit\">\n                <h1>Add Expenses</h1>\n              </div>\n              <div class=\"center\" *ngIf=\"isEdit\">\n                <h1>Edit Expense</h1>\n              </div>\n                <ion-input name=\"userId\" type=\"text\"[(ngModel)]=\"postData.userId\" hidden></ion-input>\n                <ion-input name=\"expenseId\" type=\"text\" [(ngModel)]=\"postData.expenseId\" hidden></ion-input>\n              <ion-card-content>\n                <ion-list>\n                  <ion-item>\n                    <ion-label position=\"stacked\">Item Name</ion-label>\n                    <ion-input autocomplete=\"off\" name=\"itemName\" type=\"text\" placeholder=\"Item Name here\" [(ngModel)]=\"postData.itemName\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Description</ion-label>\n                    <ion-input autocomplete=\"off\" name=\"itemDescription\" type=\"text\" placeholder=\"Item Description here\" [(ngModel)]=\"postData.itemDescription\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Amount</ion-label>\n                    <ion-input autocomplete=\"off\" name=\"amount\" type=\"text\" placeholder=\"Item price here\" [(ngModel)]=\"postData.amount\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Date</ion-label>\n                    <ion-datetime display-format=\"MM-DD-YYYY HH:mm\"  name=\"transactionDate\"\n                                  [(ngModel)]=\"postData.transactionDate\"></ion-datetime>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Location</ion-label>\n                    <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"postData.location\"></ion-input>\n                  </ion-item>\n\n                  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                  </agm-map>\n\n\n                  <ion-button expand=\"block\" shape=\"round\" color=\"dark\" (click)=\"selectSource1()\">Upload Receipt Image</ion-button>\n                  <ion-button expand=\"block\" shape=\"round\" color=\"dark\"(click)=\"reco()\">\n                    Load text</ion-button>\n\n                  <img [src]=\"selectedImage\" *ngIf=\"selectedImage\">\n                  <ion-card *ngIf=\"imageText\">\n                    <ion-card-header>\n                      Image text:\n                    </ion-card-header>\n                    <ion-card-content>\n                      {{ imageText }}\n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-button expand=\"block\" shape=\"round\" color=\"dark\" (click)=\"addExpense()\" *ngIf=\"!isEdit\">Add</ion-button>\n                  <ion-button expand=\"block\" shape=\"round\" color=\"dark\" (click)=\"editExpense()\" *ngIf=\"isEdit\">Save Expense</ion-button>\n                </ion-list>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/tesseract.js/dist/tesseract.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/dist/tesseract.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
module.exports={
  "name": "tesseract.js",
  "version": "1.0.19",
  "description": "Pure Javascript Multilingual OCR",
  "main": "src/index.js",
  "scripts": {
    "start": "concurrently --kill-others \"watchify src/index.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\" \"watchify src/browser/worker.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\" \"http-server -p 7355\"",
    "build": "browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js",
    "release": "npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish"
  },
  "browser": {
    "./src/node/index.js": "./src/browser/index.js"
  },
  "author": "",
  "license": "Apache-2.0",
  "devDependencies": {
    "babel-preset-es2015": "^6.16.0",
    "babelify": "^7.3.0",
    "browserify": "^13.1.0",
    "concurrently": "^3.1.0",
    "envify": "^3.4.1",
    "http-server": "^0.9.0",
    "pako": "^1.0.3",
    "uglify-js": "^3.4.9",
    "watchify": "^3.7.0"
  },
  "dependencies": {
    "file-type": "^3.8.0",
    "isomorphic-fetch": "^2.2.1",
    "is-url": "1.2.2",
    "jpeg-js": "^0.2.0",
    "level-js": "^2.2.4",
    "node-fetch": "^1.6.3",
    "object-assign": "^4.1.0",
    "png.js": "^0.2.1",
    "tesseract.js-core": "^1.0.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/naptha/tesseract.js.git"
  },
  "bugs": {
    "url": "https://github.com/naptha/tesseract.js/issues"
  },
  "homepage": "https://github.com/naptha/tesseract.js"
}

},{}],3:[function(require,module,exports){
(function (process){
'use strict';

var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',
    langPath: 'https://tessdata.projectnaptha.com/3.02/'
};

if (process.env.TESS_ENV === "development") {
    console.debug('Using Development Configuration');
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3);
} else {
    var version = require('../../package.json').version;
    defaultOptions.workerPath = 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@' + version + '/dist/worker.js';
}

exports.defaultOptions = defaultOptions;

exports.spawnWorker = function spawnWorker(instance, workerOptions) {
    if (Blob && URL) {
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'], {
            type: 'application/javascript'
        });
        var worker = new Worker(URL.createObjectURL(blob));
    } else {
        var worker = new Worker(workerOptions.workerPath);
    }

    worker.onmessage = function (e) {
        var packet = e.data;
        instance._recv(packet);
    };
    return worker;
};

exports.terminateWorker = function (instance) {
    instance.worker.terminate();
};

exports.sendPacket = function sendPacket(instance, packet) {
    loadImage(packet.payload.image, function (img) {
        packet.payload.image = img;
        instance.worker.postMessage(packet);
    });
};

function loadImage(image, cb) {
    if (typeof image === 'string') {
        if (/^\#/.test(image)) {
            // element css selector
            return loadImage(document.querySelector(image), cb);
        } else if (/(blob|data)\:/.test(image)) {
            // data url
            var im = new Image();
            im.src = image;
            im.onload = function (e) {
                return loadImage(im, cb);
            };
            im.onerror = function (e) {
                throw e;
            };
            return;
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true);
            xhr.responseType = "blob";

            xhr.onload = function (e) {
                if (xhr.status >= 400) {
                    throw new Error('Fail to get image as Blob');
                } else {
                    loadImage(xhr.response, cb);
                }
            };
            xhr.onerror = function (e) {
                throw e;
            };

            xhr.send(null);
            return;
        }
    } else if (image instanceof File) {
        // files
        var fr = new FileReader();
        fr.onload = function (e) {
            return loadImage(fr.result, cb);
        };
        fr.onerror = function (e) {
            throw e;
        };
        fr.readAsDataURL(image);
        return;
    } else if (image instanceof Blob) {
        return loadImage(URL.createObjectURL(image), cb);
    } else if (image.getContext) {
        // canvas element
        return loadImage(image.getContext('2d'), cb);
    } else if (image.tagName == "IMG" || image.tagName == "VIDEO") {
        // image element or video element
        var c = document.createElement('canvas');
        c.width = image.naturalWidth || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb);
    } else if (image.getImageData) {
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb);
    } else {
        return cb(image);
    }
    throw new Error('Missing return in loadImage cascade');
}

}).call(this,require('_process'))
},{"../../package.json":2,"_process":1}],4:[function(require,module,exports){
"use strict";

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page) {
    page.paragraphs = [];
    page.lines = [];
    page.words = [];
    page.symbols = [];

    page.blocks.forEach(function (block) {
        block.page = page;

        block.lines = [];
        block.words = [];
        block.symbols = [];

        block.paragraphs.forEach(function (para) {
            para.block = block;
            para.page = page;

            para.words = [];
            para.symbols = [];

            para.lines.forEach(function (line) {
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = [];

                line.words.forEach(function (word) {
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function (sym) {
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;

                        sym.line.symbols.push(sym);
                        sym.paragraph.symbols.push(sym);
                        sym.block.symbols.push(sym);
                        sym.page.symbols.push(sym);
                    });
                    word.paragraph.words.push(word);
                    word.block.words.push(word);
                    word.page.words.push(word);
                });
                line.block.lines.push(line);
                line.page.lines.push(line);
            });
            para.page.paragraphs.push(para);
        });
    });
    return page;
};

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adapter = require('../node/index.js');

var jobCounter = 0;

module.exports = function () {
    function TesseractJob(instance) {
        _classCallCheck(this, TesseractJob);

        this.id = 'Job-' + ++jobCounter + '-' + Math.random().toString(16).slice(3, 8);

        this._instance = instance;
        this._resolve = [];
        this._reject = [];
        this._progress = [];
        this._finally = [];
    }

    _createClass(TesseractJob, [{
        key: 'then',
        value: function then(resolve, reject) {
            if (this._resolve.push) {
                this._resolve.push(resolve);
            } else {
                resolve(this._resolve);
            }

            if (reject) this.catch(reject);
            return this;
        }
    }, {
        key: 'catch',
        value: function _catch(reject) {
            if (this._reject.push) {
                this._reject.push(reject);
            } else {
                reject(this._reject);
            }
            return this;
        }
    }, {
        key: 'progress',
        value: function progress(fn) {
            this._progress.push(fn);
            return this;
        }
    }, {
        key: 'finally',
        value: function _finally(fn) {
            this._finally.push(fn);
            return this;
        }
    }, {
        key: '_send',
        value: function _send(action, payload) {
            adapter.sendPacket(this._instance, {
                jobId: this.id,
                action: action,
                payload: payload
            });
        }
    }, {
        key: '_handle',
        value: function _handle(packet) {
            var data = packet.data;
            var runFinallyCbs = false;

            if (packet.status === 'resolve') {
                if (this._resolve.length === 0) console.log(data);
                this._resolve.forEach(function (fn) {
                    var ret = fn(data);
                    if (ret && typeof ret.then == 'function') {
                        console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.');
                    }
                });
                this._resolve = data;
                this._instance._dequeue();
                runFinallyCbs = true;
            } else if (packet.status === 'reject') {
                if (this._reject.length === 0) console.error(data);
                this._reject.forEach(function (fn) {
                    return fn(data);
                });
                this._reject = data;
                this._instance._dequeue();
                runFinallyCbs = true;
            } else if (packet.status === 'progress') {
                this._progress.forEach(function (fn) {
                    return fn(data);
                });
            } else {
                console.warn('Message type unknown', packet.status);
            }

            if (runFinallyCbs) {
                this._finally.forEach(function (fn) {
                    return fn(data);
                });
            }
        }
    }]);

    return TesseractJob;
}();

},{"../node/index.js":3}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adapter = require('./node/index.js');
var circularize = require('./common/circularize.js');
var TesseractJob = require('./common/job');
var version = require('../package.json').version;

var create = function create() {
	var workerOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
};

var TesseractWorker = function () {
	function TesseractWorker(workerOptions) {
		_classCallCheck(this, TesseractWorker);

		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	_createClass(TesseractWorker, [{
		key: 'recognize',
		value: function recognize(image) {
			var _this = this;

			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return this._delay(function (job) {
				if (typeof options === 'string') options = { lang: options };
				options.lang = options.lang || 'eng';

				job._send('recognize', { image: image, options: options, workerOptions: _this.workerOptions });
			});
		}
	}, {
		key: 'detect',
		value: function detect(image) {
			var _this2 = this;

			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return this._delay(function (job) {
				job._send('detect', { image: image, options: options, workerOptions: _this2.workerOptions });
			});
		}
	}, {
		key: 'terminate',
		value: function terminate() {
			if (this.worker) adapter.terminateWorker(this);
			this.worker = null;
			this._currentJob = null;
			this._queue = [];
		}
	}, {
		key: '_delay',
		value: function _delay(fn) {
			var _this3 = this;

			if (!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

			var job = new TesseractJob(this);
			this._queue.push(function (e) {
				_this3._queue.shift();
				_this3._currentJob = job;
				fn(job);
			});
			if (!this._currentJob) this._dequeue();
			return job;
		}
	}, {
		key: '_dequeue',
		value: function _dequeue() {
			this._currentJob = null;
			if (this._queue.length) {
				this._queue[0]();
			}
		}
	}, {
		key: '_recv',
		value: function _recv(packet) {
			if (packet.status === 'resolve' && packet.action === 'recognize') {
				packet.data = circularize(packet.data);
			}

			if (this._currentJob.id === packet.jobId) {
				this._currentJob._handle(packet);
			} else {
				console.warn('Job ID ' + packet.jobId + ' not known.');
			}
		}
	}]);

	return TesseractWorker;
}();

module.exports = create();

},{"../package.json":2,"./common/circularize.js":4,"./common/job":5,"./node/index.js":3}]},{},[6])(6)
});

/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"tesseract.js@^1.0.19","_id":"tesseract.js@1.0.19","_inBundle":false,"_integrity":"sha512-UXnCd2GkDOuVwPYv8MryzDwXEPLJ/BjEuT76PWzVC8XhZbsChRkpoiKDSGDbZ2BW2rwg1yBWJ0joSdCTw1umBA==","_location":"/tesseract.js","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"tesseract.js@^1.0.19","name":"tesseract.js","escapedName":"tesseract.js","rawSpec":"^1.0.19","saveSpec":null,"fetchSpec":"^1.0.19"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.19.tgz","_shasum":"f66a9accef1aa933ec7e574d1bb3205f7d2aef65","_spec":"tesseract.js@^1.0.19","_where":"C:\\Nilay\\SideProject\\sideProject-nnarlawar\\UI","author":"","browser":{"./src/node/index.js":"./src/browser/index.js"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"bundleDependencies":false,"dependencies":{"file-type":"^3.8.0","is-url":"1.2.2","isomorphic-fetch":"^2.2.1","jpeg-js":"^0.2.0","level-js":"^2.2.4","node-fetch":"^1.6.3","object-assign":"^4.1.0","png.js":"^0.2.1","tesseract.js-core":"^1.0.2"},"deprecated":false,"description":"Pure Javascript Multilingual OCR","devDependencies":{"babel-preset-es2015":"^6.16.0","babelify":"^7.3.0","browserify":"^13.1.0","concurrently":"^3.1.0","envify":"^3.4.1","http-server":"^0.9.0","pako":"^1.0.3","uglify-js":"^3.4.9","watchify":"^3.7.0"},"homepage":"https://github.com/naptha/tesseract.js","license":"Apache-2.0","main":"src/index.js","name":"tesseract.js","repository":{"type":"git","url":"git+https://github.com/naptha/tesseract.js.git"},"scripts":{"build":"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js","release":"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish","start":"concurrently --kill-others \"watchify src/index.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\" \"watchify src/browser/worker.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\" \"http-server -p 7355\""},"version":"1.0.19"};

/***/ }),

/***/ "./node_modules/tesseract.js/src/browser/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/browser/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',    
    langPath: 'https://tessdata.projectnaptha.com/3.02/',
}

if (process.env.TESS_ENV === "development") {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{
    var version = __webpack_require__(/*! ../../package.json */ "./node_modules/tesseract.js/package.json").version;
    defaultOptions.workerPath = 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@' + version + '/dist/worker.js'
}

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(Blob && URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'], {
            type: 'application/javascript'
        });
        var worker = new Worker(URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            im.onerror = e => { throw e; };
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            
            xhr.onload = e => {
                if (xhr.status >= 400){
                  throw new Error('Fail to get image as Blob');
                }else{
                    loadImage(xhr.response, cb);
                }
            };
            xhr.onerror = e => { throw e; }; 
            
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.onerror = e => { throw e; }; 
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}


/***/ }),

/***/ "./node_modules/tesseract.js/src/common/circularize.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/circularize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/job.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/job.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ../node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ./node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")
const circularize = __webpack_require__(/*! ./common/circularize.js */ "./node_modules/tesseract.js/src/common/circularize.js")
const TesseractJob = __webpack_require__(/*! ./common/job */ "./node_modules/tesseract.js/src/common/job.js");
const version = __webpack_require__(/*! ../package.json */ "./node_modules/tesseract.js/package.json").version;

const create = function(workerOptions = {}){
	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	recognize(image, options = {}){
		return this._delay(job => {
			if (typeof options === 'string') options = {lang: options}
			options.lang = options.lang || 'eng';

			job._send('recognize', { image, options, workerOptions: this.workerOptions });
		})
	}
	detect(image, options = {}){
		return this._delay(job => {
			job._send('detect', { image, options, workerOptions: this.workerOptions });
		})
	}

	terminate(){
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
		this._currentJob = null;
		this._queue = [];
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift();
			this._currentJob = job;
			fn(job);
		});
		if(!this._currentJob) this._dequeue();
		return job;
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length){
			this._queue[0]();
		}
	}

	_recv(packet){
        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		} else {
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

module.exports = create();


/***/ }),

/***/ "./node_modules/tesseract.ts/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/tesseract.ts/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _instance = typeof window !== 'undefined' ? __webpack_require__(/*! tesseract.js/dist/tesseract */ "./node_modules/tesseract.js/dist/tesseract.js") : __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
exports.Tesseract = _instance;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/addexpense/addexpense.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addexpense/addexpense.module.ts ***!
  \*******************************************************/
/*! exports provided: AddexpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddexpensePageModule", function() { return AddexpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addexpense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addexpense.page */ "./src/app/pages/addexpense/addexpense.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");








var routes = [
    {
        path: '',
        component: _addexpense_page__WEBPACK_IMPORTED_MODULE_6__["AddexpensePage"]
    }
];
var AddexpensePageModule = /** @class */ (function () {
    function AddexpensePageModule() {
    }
    AddexpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"]
            ],
            declarations: [_addexpense_page__WEBPACK_IMPORTED_MODULE_6__["AddexpensePage"]]
        })
    ], AddexpensePageModule);
    return AddexpensePageModule;
}());



/***/ }),

/***/ "./src/app/pages/addexpense/addexpense.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/addexpense/addexpense.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-addexpense .ng-progress-bar {\n  margin-top: 88px;\n}\npage-addexpense agm-map {\n  height: 300px !important;\n  width: 100%;\n  /* This is really important*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkZXhwZW5zZS9DOlxcTmlsYXlcXFNpZGVQcm9qZWN0XFxzaWRlUHJvamVjdC1ubmFybGF3YXJcXFVJL3NyY1xcYXBwXFxwYWdlc1xcYWRkZXhwZW5zZVxcYWRkZXhwZW5zZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZGV4cGVuc2UvYWRkZXhwZW5zZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQkFBQTtBQ0FOO0FERUk7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFBYyw0QkFBQTtBQ0NwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGV4cGVuc2UvYWRkZXhwZW5zZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWFkZGV4cGVuc2V7XHJcbiAgICAubmctcHJvZ3Jlc3MtYmFye1xyXG4gICAgICBtYXJnaW4tdG9wOiA4OHB4O1xyXG4gICAgfVxyXG4gICAgYWdtLW1hcCB7XHJcbiAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7ICAvKiBUaGlzIGlzIHJlYWxseSBpbXBvcnRhbnQqL1xyXG4gICAgfVxyXG59XHJcbiIsInBhZ2UtYWRkZXhwZW5zZSAubmctcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogODhweDtcbn1cbnBhZ2UtYWRkZXhwZW5zZSBhZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgLyogVGhpcyBpcyByZWFsbHkgaW1wb3J0YW50Ki9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/addexpense/addexpense.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/addexpense/addexpense.page.ts ***!
  \*****************************************************/
/*! exports provided: AddexpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddexpensePage", function() { return AddexpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tesseract.ts */ "./node_modules/tesseract.ts/dist/index.js");
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tesseract_ts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/Google.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(google_maps__WEBPACK_IMPORTED_MODULE_10__);











var AddexpensePage = /** @class */ (function () {
    function AddexpensePage(router, route, authService, toastService, actionSheetController, camera, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.toastService = toastService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.expenseId = 0;
        this.isEdit = false;
        this.postData = {
            itemName: '',
            itemDescription: '',
            amount: '',
            transactionDate: '',
            location: '',
            userId: 1,
            expenseId: ''
        };
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.setPosition();
        this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                _this.expenseId = params.id;
            }
            else {
                _this.expenseId = 0;
                _this.postData = { itemName: '',
                    itemDescription: '',
                    amount: '',
                    transactionDate: '',
                    location: '',
                    userId: 1,
                    expenseId: '' };
            }
        });
    }
    AddexpensePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.setPosition();
        this.mapsAPILoader.load().then(function () {
            var nativeHomeInputBox = _this.postData.location;
            var autocomplete = new google_maps__WEBPACK_IMPORTED_MODULE_10__["google"].maps.places.Autocomplete(nativeHomeInputBox, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = google_maps__WEBPACK_IMPORTED_MODULE_10__["google"].maps.places.PlaceResult = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
        if (this.expenseId && this.expenseId !== 0) {
            this.isEdit = true;
            this.authService.getExpense(this.expenseId).subscribe(function (response) {
                if (response) {
                    _this.postData.amount = response.amount;
                    _this.postData.expenseId = response.expenseId;
                    _this.postData.itemName = response.itemName;
                    _this.postData.itemDescription = response.itemDescription;
                    _this.postData.transactionDate = response.transactionDate;
                    _this.postData.location = response.location;
                }
            });
        }
        else {
            this.isEdit = false;
        }
    };
    // ionViewDidLoad() {
    //     this.zoom = 4;
    //     this.latitude = 39.8282;
    //     this.longitude = -98.5795;
    //
    //     this.searchCtrl = new FormControl();
    //
    //     this.setPosition();
    //
    //     this.mapsAPILoader.load().then(() => {
    //         const nativeHomeInputBox = document.getElementById('location').getElementsByTagName('input')[0];
    //         const autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
    //             types: ['address']
    //         });
    //         autocomplete.addListener('place_changed', () => {
    //             this.ngZone.run(() => {
    //                 const place = google.maps.places.PlaceResult = autocomplete.getPlace();
    //
    //                 if (place.geometry === undefined || place.geometry === null) {
    //                     return;
    //                 }
    //                 this.latitude = place.geometry.location.lat();
    //                 this.longitude = place.geometry.location.lng();
    //                 this.zoom = 12;
    //             });
    //         });
    //     });
    // }
    AddexpensePage.prototype.ngOnInit = function () {
    };
    AddexpensePage.prototype.setPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    AddexpensePage.prototype.validateInputs = function () {
        var itemname = this.postData.itemName.trim();
        var itemdescription = this.postData.itemDescription.trim();
        var amount = this.postData.amount.trim();
        var transactionDate = this.postData.transactionDate.trim();
        var location = this.postData.location.trim();
        return (this.postData.itemName && this.postData.itemDescription
            && itemdescription.length > 0 && itemname.length > 0 && amount.length > 0 &&
            transactionDate.length > 0 && location.length > 0);
    };
    AddexpensePage.prototype.reco = function () {
        var _this = this;
        tesseract_ts__WEBPACK_IMPORTED_MODULE_7__["Tesseract"].recognize('../../../assets/groceryReceipt.jpg').then(function (result) {
            _this.imageText = result.text;
            console.log(_this.imageText);
        });
    };
    AddexpensePage.prototype.selectSource1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionsheet1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '',
                            buttons: [
                                {
                                    text: 'Use Library',
                                    handler: function () {
                                        _this.camera.getPicture({
                                            quality: 100, destinationType: _this.camera.DestinationType.DATA_URL,
                                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                                            allowEdit: true,
                                            saveToPhotoAlbum: false,
                                            correctOrientation: true
                                        }).then(function (imageData) {
                                            _this.selectedImage = 'data:image/jpeg;base64' + { imageData: imageData };
                                        });
                                        // this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Capture Image',
                                    handler: function () {
                                        _this.camera.getPicture({
                                            quality: 100, destinationType: _this.camera.DestinationType.DATA_URL,
                                            sourceType: _this.camera.PictureSourceType.CAMERA,
                                            allowEdit: true,
                                            saveToPhotoAlbum: false,
                                            correctOrientation: true
                                        }).then(function (imageData) {
                                            _this.selectedImage = 'data:image/jpeg;base64' + { imageData: imageData };
                                        });
                                        // this.getPicture(this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionsheet1 = _a.sent();
                        return [4 /*yield*/, actionsheet1.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddexpensePage.prototype.addExpense = function () {
        var _this = this;
        if (this.validateInputs()) {
            this.authService.addExpense(this.postData).subscribe(function (response) {
                _this.router.navigateByUrl('/home/viewexpense');
            });
        }
        else {
            this.toastService.presentToast('Please give some information about expense');
        }
    };
    AddexpensePage.prototype.editExpense = function () {
        var _this = this;
        if (this.validateInputs()) {
            this.authService.editExpense(this.postData).subscribe(function (response) {
                _this.router.navigateByUrl('/home/viewexpense');
            });
        }
        else {
            this.toastService.presentToast('Please provide some information about expense');
        }
    };
    AddexpensePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_8__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    AddexpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addexpense',
            template: __webpack_require__(/*! raw-loader!./addexpense.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addexpense/addexpense.page.html"),
            styles: [__webpack_require__(/*! ./addexpense.page.scss */ "./src/app/pages/addexpense/addexpense.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AddexpensePage);
    return AddexpensePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addexpense-addexpense-module-es5.js.map