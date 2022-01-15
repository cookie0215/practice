
# [Practice] For문

💙 문제 :  
새해를 맞이해서 다이어트를 결심했지만 갑자기 입이 심심해진 똑소리.  
문득 만 원 이상 구매 시 사용할 수 있는 20% 할인 쿠폰이 있다는 걸 깨닫게 되고..  
이성을 잃고 간식을 엄청 구매하게 되었는데...  

**똑소리가 구매한 간식들의 총 가격을 구해주세요.**

```javascript
const snackBag = [
  { name: "썬칩", price: 2500 },
  { name: "자가비", price: 1500 },
  { name: "쵸코송이", price: 1000 },
  { name: "칸쵸", price: 1700 },
  { name: "쫀득 초코칩", price: 2500 },
  { name: "코카콜라", price: 1800 }
];
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

1. 합계를 구하기 전 총 금액의 기준점을 먼저 잡는다.
2. snackBag을 for of문으로 배열안의 각 객체들을 순회한다.  
  { name: "썬칩", price: 2500 },   
  { name: "자가비", price: 1500 },   
  { name: "쵸코송이", price: 1000 },  
  ...(중략)..  

3. 각 객체들의 프로퍼티 key중 price의 value를 가져 온다.

4. price의 value들을 차례대로 더한다.

5. 모두 더한값이 만원이상일 때, 20% 할인이 적용되도록 조건문 작성

<br>

> 구매금액 = 정가 * (100% - 할인율)

<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
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
```

