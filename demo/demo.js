(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _notifyMe = require('./notify-me');

var _notifyMe2 = _interopRequireDefault(_notifyMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function Demo() {
	_classCallCheck(this, Demo);

	console.log('Demo');
	var notifyMe = new _notifyMe2.default();

	//CSS TRANSITION

	var transitionElm = document.getElementsByClassName('transition-demo')[0];
	var btnTransitionIn = document.getElementsByClassName('btn-transition')[0];
	var btnTransitionOut = document.getElementsByClassName('btn-transition-remove')[0];

	notifyMe.notifyTransitionEnd(transitionElm, function () {
		console.log('transitionElm End');
	});

	btnTransitionIn.onclick = function () {
		transitionElm.classList.add('transition-in');
	};

	btnTransitionOut.onclick = function () {
		transitionElm.classList.remove('transition-in');
	};

	//CSS ANIMATION

	var animationElm = document.getElementsByClassName('animation-demo')[0];
	var btnAnimationIn = document.getElementsByClassName('btn-animation')[0];
	var btnAnimationOut = document.getElementsByClassName('btn-animation-remove')[0];

	notifyMe.notifyAnimationEnd(animationElm, function () {
		console.log('animationElm End');
	});

	btnAnimationIn.onclick = function () {
		console.log('click', btnAnimationIn);
		animationElm.classList.add('animation-in');
	};
	btnAnimationOut.onclick = function () {
		animationElm.classList.remove('animation-in');
	};
};

window.demo = new Demo();

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

        console.log('NotifyMe');
    }

    _createClass(NotifyMe, [{
        key: 'notifyTransitionEnd',
        value: function notifyTransitionEnd(elm, func) {
            elm.addEventListener('transitionend', func, false);
        }
    }, {
        key: 'notifyAnimationEnd',
        value: function notifyAnimationEnd(elm, func) {
            elm.addEventListener('webkitAnimationEnd', func, false);
            elm.addEventListener('animationend', func, false);
        }
    }]);

    return NotifyMe;
}();

exports.default = NotifyMe;

},{}]},{},[1]);
