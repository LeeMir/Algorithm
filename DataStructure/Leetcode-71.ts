// https://leetcode.com/problems/simplify-path

function simplifyPath(path: string): string {
  if (!path || path.length === 0) return '';
  let pathArr = path.split('/');
  let history: string[] = [];

  const size = pathArr.length;

  for (let i = 0; i < size; i++) {
    let elem = pathArr[i];

    if (elem === '..' && history.length > 0) {
      history.pop();
    }

    if (elem !== '..' && elem !== '.' && elem !== '') {
      history.push(elem);
    }
  }
  return '/' + history.join('/');
}
