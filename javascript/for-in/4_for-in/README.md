
# [Practice] For문

💙 문제 :  
**for in 반복문을 사용해서 위 3과목의 평균점수를 구하고 '80점이 넘었다면 합격, 넘지 못했다면 나머지공부' 를 출력하기**

```javascript
const 점수 = {
  언어: 88,
  수리: 56,
  외국어: 96,
};
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

1. `Object.keys(score).length;` 를 사용해 객체의 속성(key) 갯수를 구한다.
2. 모든 점수를 더하기 위해 먼저 totalScore로 기준값을 정한다.
3. 반복문 for in을 통해 객체의 각 key를 순회한 뒤, 각 key의 값을 반환할 수 있도록 작성
4. 각 key의 값을 모두 더한다.
5. 아까 구해논 객체의 속성 갯수를 통해 totalScore를 나눈다.
6. 삼항 연산자를 활용해 결과를 출력 

<br>
<br>


## 😥 처한 문제점

<br>
if문 보다 좀 더 간결하게 작성할 수 있는 삼항 연산자를 사용해보자!!

<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
const score = {
  언어: 88,
  수리: 56,
  외국어: 96,
};

let totalScore = 0;
const count = Object.keys(score).length;
let average;

for(let key in score){
  totalScore += score[key];
  average = totalScore / count;   
}
console.log(`${average} , ${average > 80 ? '합격' : '나머지 공부'}`)

// 80 , 나머지 공부
```

