// https://programmers.co.kr/learn/courses/30/lessons/42884

const solution = (routes) => {
  const sortedRoutes = routes.sort((a, b) => a[0] - b[0]);
  let answer = 0;
  let lastCam = -30001;
  for (let i = 0; i < routes.length; i++) {
    const [start, end] = sortedRoutes[i];
    if (end < lastCam) {
      lastCam = end;
    }
    if (start > lastCam) {
      answer++;
      lastCam = end;
    }
  }
      
  return answer;
}
