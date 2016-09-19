'use strict';

class NotifyMe {
    constructor() {
        console.log('NotifyMe');
    }

    notifyTransitionEnd(elm, func) {
		elm.addEventListener('transitionend', func, false);
    }

    notifyAnimationEnd(elm, func) {
		elm.addEventListener('webkitAnimationEnd', func, false);
		elm.addEventListener('animationend', func, false);
    }
}

export default NotifyMe;
