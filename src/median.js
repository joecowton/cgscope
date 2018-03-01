function median(arr) {
	const arrLength = arr[0];
	const sortedArray = arr.slice(1).sort();

	let index = Math.floor(arrLength / 2);

	if (arrLength % 2 !== 0) {
		return sortedArray[index];
	}

	return (sortedArray[index - 1] + sortedArray[index]) / 2;
}

module.exports = median;
