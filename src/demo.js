'use strict';

import NotifyCss from './notifycss';

class Demo {
	constructor() {

	}
	setup() {
		this.notifyCss = new NotifyCss();

		//CSS TRANSITION

		this.transitionElm = document.getElementsByClassName('transition-demo')[0];
		this.btnTransitionIn = document.getElementsByClassName('btn-transition')[0];
		this.btnTransitionOut = document.getElementsByClassName('btn-transition-remove')[0];

		this.notifyCss.transitionEnd(this.transitionElm, () => {
			this.transitionComplete();
		});

		this.btnTransitionIn.onclick = () => {
			this.addTransition();
		};

		this.btnTransitionOut.onclick = () => {
			this.removeTransition();
		};

		//CSS ANIMATION

		this.animationElm = document.getElementsByClassName('animation-demo')[0];
		this.btnAnimationIn = document.getElementsByClassName('btn-animation')[0];
		this.btnAnimationOut = document.getElementsByClassName('btn-animation-remove')[0];

		this.notifyCss.animationEnd(this.animationElm, () => {
			this.animationComplete();
		}, 'animationShow');

		this.btnAnimationIn.onclick = () => {
			this.addAnimation();
		};
		this.btnAnimationOut.onclick = () => {
			this.removeAnimation();
		};
	}
	showAlert() {
		let alert = document.getElementsByClassName('alert')[0];
		alert.classList.add('alert-in');
		let timer = setTimeout(() => {
			alert.classList.remove('alert-in');
			clearTimeout(timer);
		}, 1000);
	}
	addTransition() {
		this.transitionElm.classList.remove('end');
		this.transitionElm.classList.add('transition-in');
	}
	addAnimation() {
		this.animationElm.classList.remove('end');
		this.animationElm.classList.add('animation-in');
	}
	animationComplete() {
		this.showAlert();
		this.animationElm.classList.add('end');
	}
	transitionComplete() {
		this.showAlert();
		this.transitionElm.classList.add('end');
	}
	removeTransition() {
		this.transitionElm.classList.remove('end');
		this.transitionElm.classList.remove('transition-in');
	}
	removeAnimation() {
		this.animationElm.classList.remove('end');
		this.animationElm.classList.remove('animation-in');
	}
	removeAnimationListener() {
		this.notifyCss.removeAnimationListener(this.animationElm);
	}
	removeTransitionListener() {
		this.notifyCss.removeTransitionListener(this.transitionElm);
	}

}

window.demo = new Demo();