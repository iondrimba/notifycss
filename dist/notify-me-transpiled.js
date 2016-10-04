(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotifyMe = function () {
	function NotifyMe() {
		_classCallCheck(this, NotifyMe);

		this.TRANSITION_END = 'transitionend';
		this.ANIMATION_END = 'animationend';
		this.WEBKIT_ANIMATION_END = 'webkitAnimationEnd';
	}

	_createClass(NotifyMe, [{
		key: '_privateCall',
		value: function _privateCall(e, func, name) {
			if (name.length) {
				if (e.animationName === name) {
					func(e);
				}
			} else {
				func(e);
			}
		}
	}, {
		key: '_removeListener',
		value: function _removeListener(elm, evt, func) {
			elm.removeEventListener(evt, func, false);
			elm[evt] = null;
		}
	}, {
		key: 'transitionEnd',
		value: function transitionEnd(elm, func) {
			elm[this.TRANSITION_END] = func;
			elm.addEventListener(this.TRANSITION_END, func, false);
		}
	}, {
		key: 'animationEnd',
		value: function animationEnd(elm, func) {
			var _this = this;

			var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

			var localFunc = function localFunc(e) {
				_this._privateCall(e, func, name);
			};

			elm[this.WEBKIT_ANIMATION_END] = localFunc;
			elm[this.ANIMATION_END] = localFunc;

			elm.addEventListener(this.WEBKIT_ANIMATION_END, localFunc, false);
			elm.addEventListener(this.ANIMATION_END, localFunc, false);
		}
	}, {
		key: 'removeTransitionListener',
		value: function removeTransitionListener(elm) {
			this._removeListener(elm, this.TRANSITION_END, elm[this.TRANSITION_END]);
		}
	}, {
		key: 'removeAnimationListener',
		value: function removeAnimationListener(elm) {
			this._removeListener(elm, this.WEBKIT_ANIMATION_END, elm[this.WEBKIT_ANIMATION_END]);
			this._removeListener(elm, this.ANIMATION_END, elm[this.ANIMATION_END]);
		}
	}]);

	return NotifyMe;
}();

exports.default = NotifyMe;

},{}]},{},[1]);
