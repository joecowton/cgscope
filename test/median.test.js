const median = require('../src/median');

describe('Median', () => {
	it('is a function', () => {
		expect(typeof median).toEqual('function');
	});

	it('correctly returns output when input is [1,1]', () => {
		expect(median([1, 1])).toEqual(1.0);
	});

	it('correctly returns output when input is [2, 1, 2]', () => {
		expect(median([2, 1, 2])).toEqual(1.5);
	});

	it('correctly returns output when input is [3, 1, 2, 3]', () => {
		expect(median([3, 1, 2, 3])).toEqual(2.0);
	});

	it('correctly returns output when input is unsequenced', () => {
		expect(median([4, 12.5, 24.7, 30.0, 25.3])).toEqual(25.0);
	});
});
