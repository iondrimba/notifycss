'use strict';

class NotifyCss {
	constructor() {
		this.TRANSITION_END = 'transitionend';
		this.ANIMATION_END = 'animationend';
		this.WEBKIT_ANIMATION_END = 'webkitAnimationEnd';
	}
	_privateCall(e, func, animationName = '') {
		if (animationName.length) {
			if (e.animationName === animationName) {
				func(e);
			}
		} else {
			func(e);
		}
	}
	_removeListener(elm, evt, func) {
		elm.removeEventListener(evt, func, false);
		elm[evt] = null;
	}
	transitionEnd(elm, func) {
		elm[this.TRANSITION_END] = func;
		elm.addEventListener(this.TRANSITION_END, func, false);
	}
	animationEnd(elm, func, animationName = '') {
		let localFunc = (e) => {
			this._privateCall(e, func, animationName);
		};

		elm[this.WEBKIT_ANIMATION_END] = localFunc;
		elm[this.ANIMATION_END] = localFunc;

		elm.addEventListener(this.WEBKIT_ANIMATION_END, localFunc, false);
		elm.addEventListener(this.ANIMATION_END, localFunc, false);
	}
	removeTransitionListener(elm) {
		this._removeListener(elm, this.TRANSITION_END, elm[this.TRANSITION_END]);
	}
	removeAnimationListener(elm) {
		this._removeListener(elm, this.WEBKIT_ANIMATION_END, elm[this.WEBKIT_ANIMATION_END]);
		this._removeListener(elm, this.ANIMATION_END, elm[this.ANIMATION_END]);
	}
}

export default NotifyCss;