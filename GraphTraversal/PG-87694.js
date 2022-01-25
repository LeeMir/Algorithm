// https://programmers.co.kr/learn/courses/30/lessons/87694

const map = Array.from(Array(102), () => Array(102).fill(0)); // map[51][51] = { false, }
let rectangles = [];

const solution = (rectangle, characterX, characterY, itemX, itemY) => {
  rectangles = rectangle.map((rect) => rect.map((elem) => elem * 2));
  rectangles.forEach((rect, idx) => {
    const [x1, y1, x2, y2] = rect;
    for (let x = x1; x <= x2; x++) {
      map[x][y1] += 1;
      map[x][y2] += 1;
    }
    for (let y = y1; y <= y2; y++) {
      map[x1][y] += 1;
      map[x2][y] += 1;
    }  
  });
  
  return bfs(characterX * 2, characterY * 2, itemX * 2, itemY * 2);
};

const bfs = (startX, startY, endX, endY) => {
  const q = [];
  q.push({ x: startX, y: startY, len: 0 });
  
  while(q.length > 0) {
    const { x, y, len } = q.shift();
    map[x][y] -= 1;
    
    if (x === endX && y === endY) {
      return len / 2;
    }
    
    if (x > 0 && map[x - 1][y] > 0 && !isInRect(x - 1, y)) {
      q.push({ x: x - 1, y, len: len + 1 });
    }
    
    if (x < 102 && map[x + 1][y] > 0 && !isInRect(x + 1, y)) {
      q.push({ x: x + 1, y, len: len + 1 });
    }
    
    if (y > 0 && map[x][y - 1] > 0 && !isInRect(x, y - 1)) {
      q.push({ x, y: y - 1, len: len + 1 });
    }
    
    if (y < 102 && map[x][y + 1] > 0 && !isInRect(x, y + 1)) {
      q.push({ x, y: y + 1, len: len + 1 });
    }
  }
};

const isInRect = (x, y) => rectangles.reduce((pre, cur) => {
  const [x1, y1, x2, y2] = cur;
  if (pre) {
    return pre;
  }
  if (x > x1 && x < x2 && y > y1 && y < y2) {
    return true;
  }
  return false;
}, false);