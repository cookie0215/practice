const snackBag = [
  { name: "썬칩", price: 2500 },
  { name: "자가비", price: 1500 },
  { name: "쵸코송이", price: 1000 },
  { name: "칸쵸", price: 1700 },
  { name: "쫀득 초코칩", price: 2500 },
  { name: "코카콜라", price: 1800 }
];

let total = 0;

for(let item of snackBag) {
  // console.log(item);

  total += item.price;
  if(total >= 10000){
    total = total * (80/100);
  }
}

console.log(`구매한 간식 총 가격 : ${total}`);
