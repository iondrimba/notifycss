beforeEach(function() {
	fixture.load('fixture.html');
	demo.setup();
});

describe('demo', () => {
	it('should be instatiated', () => {
		expect(demo).not.toBeNull();
	});
	it('should setup NotifyMe', () => {
		expect(demo.notifyMe).not.toBeNull();
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