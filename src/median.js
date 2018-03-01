function median(n) {
	const numOfInts = n[0];
	const ints = n;
	let median = 0;
	console.log(numOfInts);

	for (let i = 1; i <= numOfInts; i++) {
		median += ints[i];
	}
	return median;
}

module.exports = median;
