/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.AnimationFrame=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){/**
	 * An even better animation frame.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/kof/animationFrame
	 * @license MIT
	 */
	module.exports=require("./lib/animation-frame")},{"./lib/animation-frame":2}],2:[function(require,module,exports){"use strict";var nativeImpl=require("./native");var now=require("./now");var performance=require("./performance");var nativeRequest=nativeImpl.request;var nativeCancel=nativeImpl.cancel;function AnimationFrame(options){if(!(this instanceof AnimationFrame))return new AnimationFrame(options);options||(options={});if(typeof options=="number")options={frameRate:options};options.useNative!=null||(options.useNative=true);this.options=options;this.frameRate=options.frameRate||AnimationFrame.FRAME_RATE;this._frameLength=1e3/this.frameRate;this._isCustomFrameRate=this.frameRate!==AnimationFrame.FRAME_RATE;this._timeoutId=null;this._callbacks={};this._lastTickTime=0;this._tickCounter=0}module.exports=AnimationFrame;AnimationFrame.FRAME_RATE=60;AnimationFrame.shim=function(options){var animationFrame=new AnimationFrame(options);window.requestAnimationFrame=function(callback){return animationFrame.request(callback)};window.cancelAnimationFrame=function(id){return animationFrame.cancel(id)};return animationFrame};AnimationFrame.prototype.request=function(callback){var self=this;++this._tickCounter;if(nativeImpl.supported&&this.options.useNative&&!this._isCustomFrameRate){return nativeRequest(callback)}if(!callback)throw new TypeError("Not enough arguments");if(this._timeoutId==null){var delay=this._frameLength+this._lastTickTime-now();if(delay<0)delay=0;this._timeoutId=setTimeout(function(){self._lastTickTime=now();self._timeoutId=null;++self._tickCounter;var callbacks=self._callbacks;self._callbacks={};for(var id in callbacks){if(callbacks[id]){if(nativeImpl.supported&&self.options.useNative){nativeRequest(callbacks[id])}else{callbacks[id](performance.now())}}}},delay)}this._callbacks[this._tickCounter]=callback;return this._tickCounter};AnimationFrame.prototype.cancel=function(id){if(nativeImpl.supported&&this.options.useNative)nativeCancel(id);delete this._callbacks[id]}},{"./native":3,"./now":4,"./performance":6}],3:[function(require,module,exports){"use strict";var global=window;try{global.top.name;global=global.top}catch(e){}exports.request=global.requestAnimationFrame;exports.cancel=global.cancelAnimationFrame||global.cancelRequestAnimationFrame;exports.supported=false;var vendors=["Webkit","Moz","ms","O"];for(var i=0;i<vendors.length&&!exports.request;i++){exports.request=global[vendors[i]+"RequestAnimationFrame"];exports.cancel=global[vendors[i]+"CancelAnimationFrame"]||global[vendors[i]+"CancelRequestAnimationFrame"]}if(exports.request){exports.request.call(null,function(){exports.supported=true})}},{}],4:[function(require,module,exports){"use strict";module.exports=Date.now||function(){return(new Date).getTime()}},{}],5:[function(require,module,exports){"use strict";var now=require("./now");exports.navigationStart=now()},{"./now":4}],6:[function(require,module,exports){"use strict";var now=require("./now");var PerformanceTiming=require("./performance-timing");exports.now=function(){if(window.performance&&window.performance.now)return window.performance.now();return now()-PerformanceTiming.navigationStart}},{"./now":4,"./performance-timing":5}]},{},[1])(1)});

/***/ }
/******/ ]);