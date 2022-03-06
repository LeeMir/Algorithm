// https://programmers.co.kr/learn/courses/30/lessons/42579

const compareMusic = (a, b) => {
  if (a.play === b.play) {
    return a.id - b.id;
  }
  return b.play - a.play;
}

const solution = (genres, plays) => {
  const musicTable = {};
  const genreSum = {};
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const playTime = plays[i];
    if (!musicTable[genre]) {
      musicTable[genre] = [];
      genreSum[genre] = 0;
    }
    musicTable[genre].push({ id: i, play: playTime });
    genreSum[genre] += playTime;
  }
  
  const sortedGenres = Object.keys(genreSum).sort((a, b) => genreSum[b] - genreSum[a]);
  const answer = sortedGenres.map((genre) => {
    if (musicTable[genre].length === 1) {
      return musicTable[genre][0].id;
    }
    const sortedMusicTable = musicTable[genre].sort(compareMusic);
    return [sortedMusicTable[0].id, sortedMusicTable[1].id];
  }).flat();
  
  return answer;
};
