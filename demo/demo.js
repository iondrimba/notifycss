(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notifyMe = require('./notify-me');

var _notifyMe2 = _interopRequireDefault(_notifyMe);

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

			this.notifyMe = new _notifyMe2.default();

			//CSS TRANSITION

			this.transitionElm = document.getElementsByClassName('transition-demo')[0];
			this.btnTransitionIn = document.getElementsByClassName('btn-transition')[0];
			this.btnTransitionOut = document.getElementsByClassName('btn-transition-remove')[0];

			this.notifyMe.transitionEnd(this.transitionElm, function () {
				_this.transitionComplete();
			});

			this.btnTransitionIn.onclick = function () {
				console.log('transition click', document.getElementsByClassName('transition-demo'));
				_this.addTransition();
			};

			this.btnTransitionOut.onclick = function () {
				_this.removeTransition();
			};

			//CSS ANIMATION

			this.animationElm = document.getElementsByClassName('animation-demo')[0];
			this.btnAnimationIn = document.getElementsByClassName('btn-animation')[0];
			this.btnAnimationOut = document.getElementsByClassName('btn-animation-remove')[0];

			this.notifyMe.animationEnd(this.animationElm, function (e) {
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
		key: 'transitionComplete',
		value: function transitionComplete() {
			this.transitionElm.classList.add('end');
		}
	}, {
		key: 'addTransition',
		value: function addTransition() {
			this.transitionElm.classList.remove('end');
			this.transitionElm.classList.add('transition-in');
		}
	}, {
		key: 'removeTransition',
		value: function removeTransition() {
			this.transitionElm.classList.remove('end');
			this.transitionElm.classList.remove('transition-in');
		}
	}, {
		key: 'animationComplete',
		value: function animationComplete() {
			this.animationElm.classList.add('end');
		}
	}, {
		key: 'addAnimation',
		value: function addAnimation() {
			this.animationElm.classList.remove('end');
			this.animationElm.classList.add('animation-in');
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
			this.notifyMe.removeAnimationListener(this.animationElm);
		}
	}, {
		key: 'removeTransitionListener',
		value: function removeTransitionListener() {
			this.notifyMe.removeTransitionListener(this.transitionElm);
		}
	}]);

	return Demo;
}();

window.demo = new Demo();
window.demo.setup();

},{"./notify-me":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotifyMe = function () {
	function NotifyMe() {
		_classCallCheck(this, NotifyMe);
	}

	_createClass(NotifyMe, [{
		key: 'transitionEnd',
		value: function transitionEnd(elm, func) {
			elm.addEventListener('transitionend', func, false);
		}
	}, {
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
		value: function _removeListener(elm, func) {
			elm.removeEventListener(func);
		}
	}, {
		key: 'animationEnd',
		value: function animationEnd(elm, func) {
			var _this = this;

			var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

			elm.addEventListener('webkitAnimationEnd', function (e) {
				_this._privateCall(e, func, name);
			}, false);

			elm.addEventListener('animationend', function (e) {
				_this._privateCall(e, func, name);
			}, false);
		}
	}, {
		key: 'removeTransitionListener',
		value: function removeTransitionListener(elm) {
			this._removeListener(elm, 'transitionend');
		}
	}, {
		key: 'removeAnimationListener',
		value: function removeAnimationListener(elm) {
			this._removeListener(elm, 'webkitAnimationEnd');
			this._removeListener(elm, 'animationend');
		}
	}]);

	return NotifyMe;
}();

exports.default = NotifyMe;

},{}]},{},[1]);
