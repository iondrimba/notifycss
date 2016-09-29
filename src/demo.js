'use strict';
import NotifyMe from './notify-me';

class Demo {
	constructor() {

	}
	setup() {
		this.notifyMe = new NotifyMe();

		//CSS TRANSITION

		this.transitionElm = document.getElementsByClassName('transition-demo')[0];
		this.btnTransitionIn = document.getElementsByClassName('btn-transition')[0];
		this.btnTransitionOut = document.getElementsByClassName('btn-transition-remove')[0];

		this.notifyMe.transitionEnd(this.transitionElm, () => {
			this.transitionComplete();
		});

		this.btnTransitionIn.onclick = () => {
			console.log('transition click', document.getElementsByClassName('transition-demo'));
			this.addTransition();
		};

		this.btnTransitionOut.onclick = () => {
			this.removeTransition();
		};

		//CSS ANIMATION

		this.animationElm = document.getElementsByClassName('animation-demo')[0];
		this.btnAnimationIn = document.getElementsByClassName('btn-animation')[0];
		this.btnAnimationOut = document.getElementsByClassName('btn-animation-remove')[0];

		this.notifyMe.animationEnd(this.animationElm, (e) => {
			this.animationComplete();
		}, 'animationShow');

		this.btnAnimationIn.onclick = () => {
			this.addAnimation();
		};
		this.btnAnimationOut.onclick = () => {
			this.removeAnimation();
		};
	}
	transitionComplete() {
		this.transitionElm.classList.add('end');
	}
	addTransition() {
		this.transitionElm.classList.remove('end');
		this.transitionElm.classList.add('transition-in');
	}
	removeTransition() {
		this.transitionElm.classList.remove('end');
		this.transitionElm.classList.remove('transition-in');
	}
	animationComplete() {
		this.animationElm.classList.add('end');
	}
	addAnimation() {
		this.animationElm.classList.remove('end');
		this.animationElm.classList.add('animation-in');
	}
	removeAnimation() {
		this.animationElm.classList.remove('end');
		this.animationElm.classList.remove('animation-in');
	}
	removeAnimationListener() {
		this.notifyMe.removeAnimationListener(this.animationElm);
	}
	removeTransitionListener() {
		this.notifyMe.removeTransitionListener(this.transitionElm);
	}

}

window.demo = new Demo();