const mouse_or_mouse = require('../src/mouse_or_mouse');

describe('Mouse or Mouse', () => {
	it('is a function', () => {
		expect(typeof mouse_or_mouse).toEqual('function');
	});

	it('returns animal if sentence contains cheese', () => {
		expect(mouse_or_mouse('1 \n A mouse usually likes cheese.')).toEqual(
			'animal'
		);
	});

	it('returns computer-mouse if sentence contains ball', () => {
		expect(
			mouse_or_mouse(
				'1 \n A modern mouse will probably use a laser instead of a ball.'
			)
		).toEqual('computer-mouse');
	});

	it('parses mulitple sentence input', () => {
		expect(
			mouse_or_mouse(
				'1 \n A modern mouse will probably use a laser instead of a ball. \n A mouse usually likes cheese.'
			)
		).toEqual('computer-mouse', 'animal');
	});
});
