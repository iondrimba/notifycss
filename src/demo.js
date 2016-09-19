'use strict';
import NotifyMe from './notify-me';

class Demo {
	constructor() {
		console.log('Demo');
		let notifyMe = new NotifyMe();


		//CSS TRANSITION

		let transitionElm = document.getElementsByClassName('transition-demo')[0];
		let btnTransitionIn = document.getElementsByClassName('btn-transition')[0];
		let btnTransitionOut = document.getElementsByClassName('btn-transition-remove')[0];

		notifyMe.notifyTransitionEnd(transitionElm,()=>{
			console.log('transitionElm End');
		});

		btnTransitionIn.onclick=()=>{
			transitionElm.classList.add('transition-in');
		};

		btnTransitionOut.onclick=()=>{
			transitionElm.classList.remove('transition-in');
		};

		//CSS ANIMATION

		let animationElm = document.getElementsByClassName('animation-demo')[0];
		let btnAnimationIn = document.getElementsByClassName('btn-animation')[0];
		let btnAnimationOut = document.getElementsByClassName('btn-animation-remove')[0];

		notifyMe.notifyAnimationEnd(animationElm,()=>{
			console.log('animationElm End');
		});


		btnAnimationIn.onclick=()=>{
			console.log('click', btnAnimationIn);
			animationElm.classList.add('animation-in');
		};
		btnAnimationOut.onclick=()=>{
			animationElm.classList.remove('animation-in');
		};
	}
}

window.demo = new Demo();
