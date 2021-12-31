const buyList = ['비트코인', '도지코인', '리플', '이더리움'];
let today = new Date();
let hours = today.getHours();

console.log(today);
console.log(hours);

// 상승장
if(hours >= 7 && hours <= 12){
  for(let i = 0; i < buyList.length; i++) {
    console.log(`지금은 상승장 입니다. ${i}번째로 구매한, ${buyList[i]}을 판매합니다.`)
  }
} else {
  for(let i = buyList.length - 1; i >= 0; i--){
    console.log(`지금은 하락장입니다. ${i}번째로 구매한, ${buyList[i]}을 판매합니다`);
  }
}

