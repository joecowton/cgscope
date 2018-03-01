function median(arr)
  // takes array length from first value in array
	const arrLength = arr[0];

  // removes first value using slice() and sorts array
	const sortedArray = arr.slice(1).sort();

  // calculates median index by rounding down
	let index = Math.floor(arrLength / 2);

  // if array length is odd, return median value as middle index
	if (arrLength % 2 !== 0) {
		return sortedArray[index];
	}

  // otherwise return average of middle two values in array
	return (sortedArray[index - 1] + sortedArray[index]) / 2;
}

// export module for tests
module.exports = median;
