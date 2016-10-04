(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notifycss = require('./notifycss');

var _notifycss2 = _interopRequireDefault(_notifycss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function () {
	function Demo() {
		_classCallCheck(this, Demo);
	}

	_createClass(Demo, [{
		key: 'setup',
		value: function setup() {
			var _this = this;

			this.notifyCss = new _notifycss2.default();

			//CSS TRANSITION

			this.transitionElm = document.getElementsByClassName('transition-demo')[0];
			this.btnTransitionIn = document.getElementsByClassName('btn-transition')[0];
			this.btnTransitionOut = document.getElementsByClassName('btn-transition-remove')[0];

			this.notifyCss.transitionEnd(this.transitionElm, function () {
				_this.transitionComplete();
			});

			this.btnTransitionIn.onclick = function () {
				_this.addTransition();
			};

			this.btnTransitionOut.onclick = function () {
				_this.removeTransition();
			};

			//CSS ANIMATION

			this.animationElm = document.getElementsByClassName('animation-demo')[0];
			this.btnAnimationIn = document.getElementsByClassName('btn-animation')[0];
			this.btnAnimationOut = document.getElementsByClassName('btn-animation-remove')[0];

			this.notifyCss.animationEnd(this.animationElm, function () {
				_this.animationComplete();
			}, 'animationShow');

			this.btnAnimationIn.onclick = function () {
				_this.addAnimation();
			};
			this.btnAnimationOut.onclick = function () {
				_this.removeAnimation();
			};
		}
	}, {
		key: 'showAlert',
		value: function showAlert() {
			var alert = document.getElementsByClassName('alert')[0];
			alert.classList.add('alert-in');
			var timer = setTimeout(function () {
				alert.classList.remove('alert-in');
				clearTimeout(timer);
			}, 1000);
		}
	}, {
		key: 'addTransition',
		value: function addTransition() {
			this.transitionElm.classList.remove('end');
			this.transitionElm.classList.add('transition-in');
		}
	}, {
		key: 'addAnimation',
		value: function addAnimation() {
			this.animationElm.classList.remove('end');
			this.animationElm.classList.add('animation-in');
		}
	}, {
		key: 'animationComplete',
		value: function animationComplete() {
			this.showAlert();
			this.animationElm.classList.add('end');
		}
	}, {
		key: 'transitionComplete',
		value: function transitionComplete() {
			this.showAlert();
			this.transitionElm.classList.add('end');
		}
	}, {
		key: 'removeTransition',
		value: function removeTransition() {
			this.transitionElm.classList.remove('end');
			this.transitionElm.classList.remove('transition-in');
		}
	}, {
		key: 'removeAnimation',
		value: function removeAnimation() {
			this.animationElm.classList.remove('end');
			this.animationElm.classList.remove('animation-in');
		}
	}, {
		key: 'removeAnimationListener',
		value: function removeAnimationListener() {
			this.notifyCss.removeAnimationListener(this.animationElm);
		}
	}, {
		key: 'removeTransitionListener',
		value: function removeTransitionListener() {
			this.notifyCss.removeTransitionListener(this.transitionElm);
		}
	}]);

	return Demo;
}();

window.demo = new Demo();

},{"./notifycss":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotifyCss = function () {
	function NotifyCss() {
		_classCallCheck(this, NotifyCss);

		this.TRANSITION_END = 'transitionend';
		this.ANIMATION_END = 'animationend';
		this.WEBKIT_ANIMATION_END = 'webkitAnimationEnd';
	}

	_createClass(NotifyCss, [{
		key: '_privateCall',
		value: function _privateCall(e, func) {
			var animationName = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

			if (animationName.length) {
				if (e.animationName === animationName) {
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

			var animationName = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

			var localFunc = function localFunc(e) {
				_this._privateCall(e, func, animationName);
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

	return NotifyCss;
}();

exports.default = NotifyCss;

},{}]},{},[1]);
