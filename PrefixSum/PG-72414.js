// https://programmers.co.kr/learn/courses/30/lessons/72414

const regTime = /(?<hour>[0-9]{2}):(?<minute>[0-9]{2}):(?<second>[0-9]{2})/;
const timeLine = new Array(360000).fill(0);

const timeToSec = (time) => {
  const { hour, minute, second } = time.match(regTime).groups;
  return (Number(hour) * 3600 + Number(minute) * 60 + Number(second));
};

const secToTime = (sec) => {
  const hour = Math.floor(sec / 3600); sec -= hour * 3600;
  const HH = hour >= 10 ? hour : `0${hour}`;
  const minute = Math.floor(sec / 60); sec -= minute * 60;
  const MM = minute >= 10 ? minute : `0${minute}`;
  const second = sec;
  const SS = second >= 10 ? second : `0${second}`;
  return `${HH}:${MM}:${SS}`;
};

const solution = (play_time, adv_time, logs) => {
  const playTime = timeToSec(play_time);
  const advTime = timeToSec(adv_time);

  logs.forEach(log => {
    const [start, end] = log.split('-');
    timeLine[timeToSec(start)]++; 
    timeLine[timeToSec(end)]--;
  });

  for (let i = 1; i <= playTime; i++) {
    timeLine[i] += timeLine[i - 1];
  }

  for (let i = 1; i <= playTime; i++) {
    timeLine[i] += timeLine[i - 1];
  }

  let max = timeLine[advTime - 1];
  let maxTime = 0;
      
  for (let i = 1; i < playTime - advTime; i++) {
    const slice = timeLine[i + advTime] - timeLine[i];
    if (max < slice) {
      max = slice;
      maxTime = i + 1;
    }
  }

  const answer = secToTime(maxTime);

  return answer;
};