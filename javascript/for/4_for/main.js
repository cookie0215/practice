const gasMileage = [23.1, 21.5, 20.1, 19.5, 18.5];
const price = [3600, 3200, 4000, 2900, 5000];



for(let i = 0; i < gasMileage.length; i++){
  if(gasMileage[i] >= 19 && price[i] < 3500){
    console.log(`${i+1} 번째 차량 - 연비 : ${gasMileage[i]} km/l / 가격 : ${price[i]} 만원`);
  }
}