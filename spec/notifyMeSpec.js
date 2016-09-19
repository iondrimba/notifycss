beforeEach(function() {
	fixture.load('/index.html');
});

describe('demo', () => {
	it('should be instatiated', ()=> {
		expect(demo).not.toBeNull();
	});
	it('should setup NotifyMe', ()=> {
		demo.setup();
		expect(demo.notifyMe).not.toBeNull();
	});
	it('should call transitionComplete', (done)=> {
		demo.setup();
		spyOn(demo, 'transitionComplete');
		demo.addTransition();

		let timeout = setTimeout(() => {
            expect(demo.transitionComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 2000);
	});

	it('should call animationComplete', (done)=> {
		demo.setup();
		spyOn(demo, 'animationComplete');
		demo.addAnimation();

		let timeout = setTimeout(() => {
            expect(demo.animationComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 1000);
	});
});