function mouse_or_mouse(str) {
	// take the number of sentences from the first value
	const sentenceCount = str[0];

	// remove any punctuation or capital letters
	const string = str
		.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '')
		.toLowerCase();

	// split sentences by line
	const sentences = string.split('\n');

	// iterate through sentences checking for keyword matches
	for (i = 1; i <= sentenceCount; i++) {
		if (sentences[i].includes('cheese')) {
			return 'animal';
		} else if (sentences[i].includes('ball')) {
			return 'computer-mouse';
		}
	}
}

module.exports = mouse_or_mouse;
