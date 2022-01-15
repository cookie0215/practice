const score = {
  언어: 88,
  수리: 56,
  외국어: 96,
};

const count = Object.keys(score).length;
let totalScore = 0;
let average;

for(let key in score){
  totalScore += score[key];
  average = totalScore / count;   
}
console.log(`${average} , ${average > 80 ? '합격' : '나머지 공부'}`)

