const mouse_or_mouse = require('../src/mouse_or_mouse');

describe('Mouse or Mouse', () => {
	it('is a function', () => {
		expect(typeof mouse_or_mouse).toEqual('function');
	});

	it('returns animal if sentence contains cheese', () => {
		expect(mouse_or_mouse('2 A mouse usually likes cheese.')).toEqual('animal');
	});
});
