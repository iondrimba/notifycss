'use strict';

class NotifyMe {
	constructor() {}
	transitionEnd(elm, func) {
		elm.addEventListener('transitionend', func, false);
	}
	_privateCall(e, func, name) {
		if (name.length) {
			if (e.animationName === name) {
				func(e);
			}
		} else {
			func(e);
		}
	}
	_removeListener(elm, func) {
		elm.removeEventListener(func);
	}
	animationEnd(elm, func, name = '') {
		elm.addEventListener('webkitAnimationEnd', (e) => {
			this._privateCall(e, func, name);
		}, false);

		elm.addEventListener('animationend', (e) => {
			this._privateCall(e, func, name);
		}, false);
	}
	removeTransitionListener(elm) {
		this._removeListener(elm, 'transitionend');
	}
	removeAnimationListener(elm) {
		this._removeListener(elm, 'webkitAnimationEnd');
		this._removeListener(elm, 'animationend');
	}
}

export default NotifyMe;