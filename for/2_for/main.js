let score=[40, 67, 86, 94, 36];
let total = 0;      // 총점
let average = 0;    // 평균

for(let i = 0; i < score.length; i++){
  total += score[i]

  average = total / score.length;
}

console.log(`총점 : ${total} , 평균 : ${average}`);
// 총점 : 323 , 평균 : 64.6