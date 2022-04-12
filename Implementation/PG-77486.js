// https://programmers.co.kr/learn/courses/30/lessons/77486

const solution = (enroll, referral, seller, amount) => {
  const peopleList = {};
  const parentInfo = {};
  let ptr, money, temp;
  
  enroll.forEach((name, idx) => {
    peopleList[name] = 0;
    parentInfo[name] = referral[idx];
  });
  
  seller.forEach((name, idx) => {
    ptr = name;
    money = amount[idx] * 100;
    while(ptr !== '-') {
      if (money === 0) break;
      temp = Math.floor(money * 0.1);
      money -= temp;
      peopleList[ptr] += money;
      money = temp;
      ptr = parentInfo[ptr];
    }
  });
  
  const answer = Object.values(peopleList);
  return answer;
}
