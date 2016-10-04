beforeEach(function() {
	fixture.load('index.html');
	demo.setup();
});

describe('Demo', () => {
	it('should be instatiated', () => {
		expect(demo).not.toBeNull();
	});

	it('should setup notifyCss', () => {
		expect(demo.notifyCss).not.toBeNull();
	});

	it('should dispatch transition event', () => {
		spyOn(demo, 'addTransition');
		demo.btnTransitionIn.click();
		expect(demo.addTransition).toHaveBeenCalled();
	});

	it('should dispatch animation event', () => {
		spyOn(demo, 'addAnimation');
		demo.btnAnimationIn.click();
		expect(demo.addAnimation).toHaveBeenCalled();
	});

	it('should call transitionComplete', (done) => {
		spyOn(demo, 'transitionComplete');
		demo.addTransition();

		let timeout = setTimeout(() => {
			expect(demo.transitionComplete).toHaveBeenCalled();
			clearTimeout(timeout);
			done();
		}, 1000);
	});

	it('should call animationComplete', (done) => {
		spyOn(demo, 'animationComplete');
		demo.addAnimation();

		let timeout = setTimeout(() => {
			expect(demo.animationComplete).toHaveBeenCalled();
			clearTimeout(timeout);
			done();
		}, 1000);
	});

	it('should add end class on transitionComplete', () => {
		demo.transitionComplete();
		let classes = demo.transitionElm.classList;
		expect(classes[1]).toEqual('end');
	});

	it('should add end class on animationComplete', () => {
		demo.animationComplete();
		let classes = demo.animationElm.classList;
		expect(classes[1]).toEqual('end');
	});

	it('should remove animationListener', (done) => {
		spyOn(demo, 'animationComplete');
		demo.addAnimation();
		demo.removeAnimationListener();

		let timeout = setTimeout(() => {
			expect(demo.animationComplete).not.toHaveBeenCalled();
			clearTimeout(timeout);
			done();
		}, 1000);
	});

	it('should remove transitionListener', (done) => {
		spyOn(demo, 'transitionComplete');
		demo.addTransition();
		demo.removeTransitionListener();

		let timeout = setTimeout(() => {
			expect(demo.transitionComplete).not.toHaveBeenCalled();
			clearTimeout(timeout);
			done();
		}, 1000);
	});
});