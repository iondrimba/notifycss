'use strict';

class NotifyMe {
	constructor() {
	}
	transitionEnd(elm, func) {
		elm.addEventListener('transitionend', func, false);
	}
	_privateCall(e, func, name) {
		if(name.length) {
			if(e.animationName===name) {
				func(e);
			}
		}else {
			func(e);
		}
	}
	animationEnd(elm, func, name='') {
		elm.addEventListener('webkitAnimationEnd', (e)=>{
			this._privateCall(e, func, name);
		}, false);

		elm.addEventListener('animationend', (e)=>{
			this._privateCall(e, func, name);
		}, false);
	}
}

export default NotifyMe;
