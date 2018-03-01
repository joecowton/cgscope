function median(arr) {
	const numOfInts = arr[0];
	let total = 0;

	for (let i = 1; i <= numOfInts; i++) {
		total += arr[i];
	}
	const median = total / numOfInts;

	return median;
}

module.exports = median;
