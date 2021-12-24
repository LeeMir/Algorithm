const solution = (numbers) => {
	const arr = numbers.sort((a, b) => {
		const sixA = makeSix(a.toString());
		const sixB = makeSix(b.toString());
		if (sixA > sixB) {
			return -1;
		}
		if (sixB > sixA) {
			return 1;
		}
		return 0;
	});
	
	if (arr[0] === 0 && arr[arr.length - 1] === 0) {
		return '0';
	}
	
	const answer = arr.reduce((pre, cur) => {
		pre += cur;
		return pre;
	}, '');

	return answer;
}

const makeSix = (str) => {
	let result = str;
	while(result.length <= 6) result += str;
	return result.slice(0, 6);
};
