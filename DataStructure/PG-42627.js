// https://programmers.co.kr/learn/courses/30/lessons/42627

const solution = (jobs) => {
  const schedule = [];
  const waitingQueue = [];
  let answer = 0;
  let isWorking = false;
  let time = 0;
  let workingTime = 0;
  let cnt = 0;

  jobs.reduce((pre, cur) => {
      if (!schedule[cur[0]]) schedule[cur[0]] = [];
      schedule[cur[0]].push(cur[1]);
  }, 0);

  while (1) {
      if (schedule[time]) {
          schedule[time].forEach(elem => {
            waitingQueue.push(elem);
            cnt++;
          });
          if (waitingQueue.length >= 2) {
              waitingQueue.sort((a, b) => a - b);
          }
      }
      if (!isWorking && waitingQueue.length > 0) {
          workingTime = waitingQueue.shift();
          answer += workingTime;
          isWorking = true;
      }
      if (isWorking) {
          workingTime--;
      }
      if (isWorking && workingTime === 0) {
          isWorking = false;
      }
      if (waitingQueue.length === 0 && !isWorking && cnt === jobs.length) {
          break;
      }
      if (waitingQueue.length === 0 && !isWorking) {
          while (!schedule[time]) time++;
          continue;
      }
      answer += waitingQueue.length;
      time++;
  }
  answer /= cnt;
  return Math.floor(answer);
}
