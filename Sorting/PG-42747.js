// https://programmers.co.kr/learn/courses/30/lessons/42747

const solution = (citations) => {
	const sortedCitations = citations.sort((a, b) => b - a);
	let i;
	for (i = 0; i < citations.length; i++) {
		if (sortedCitations[i] > i) continue;
		else break;
	}
	const answer = i;
	return answer;
}
