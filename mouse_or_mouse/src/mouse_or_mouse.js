function mouse_or_mouse(str) {
	const sentenceCount = str[0];
	const words = [];
	const string = str.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');

	for (let word of string.split(' ')) {
		words.push(word);
	}

	if (words.includes('cheese')) {
		return 'animal';
	}
}

module.exports = mouse_or_mouse;
