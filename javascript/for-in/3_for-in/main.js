let gifts = ['전자기기','문화상품권','명품백']
let 소연 = []
let 지훈 = []
let 채원 = []

for(let gift in gifts){
  // console.log(gifts[gift].length);

  // if(gifts[gift].length === 3) {
  //   소연.push(gifts[gift]);
  // }
  // if(gifts[gift].length === 4) {
  //   지훈.push(gifts[gift]);
  // }
  // if(gifts[gift].length === 5) {
  //   채원.push(gifts[gift]);
  // }

  switch (gifts[gift].length) {
    case 3:
      소연.push(gifts[gift]);
      break
    case 4:
      지훈.push(gifts[gift]);
      break
    case 5:
      채원.push(gifts[gift]);
      break
  }
}

console.log(`소연 : ${소연}`);
console.log(`지훈 : ${지훈}`);
console.log(`채원 : ${채원}`);