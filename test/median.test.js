const median = require('../src/median');

describe('Median', () => {
	it('is a function', () => {
		expect(typeof median).toEqual('function');
	});

	it('correctly returns output when input is one', () => {
		expect(median([1, 1])).toEqual(1);
	});
});
