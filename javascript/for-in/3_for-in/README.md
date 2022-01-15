
# [Practice] For문

💙 문제 :  
새해겸 선물을 3가지 준비해왔다.  
**글자수가 3자리수는 채원이에게, 글자수가 4자리는 지훈이에게, 글자수가 5자리 수는 채원이에게 줄것이다.**   
**for in문과 글자수를 이용해 각각의 학생들에게 배분해라**


```javascript
let gifts = ['전자기기','문화상품권','명품백']
let 소연 = []
let 지훈 = []
let 채원 = []
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

1. 일단 gifts배열안에 있는 선물을 각각 반복문을 돌면서 순회한다.
2. gifts안에 있는 각 아이템(gift)의 글자 길이를 출력한다.
3. 조건문을 통해 글자수가 3이면 소연에게 전달하도록 작성
4. 글자수가 4이면 지훈에게 전달하도록 작성
5. 글자수가 5이면 채원에게 전달하도록 작성

<br>
<br>


## 😥 처한 문제점

<br>


<br>
<br>


## ✔️ 내가 작성한 코드

<br>

1. if문을 이용한 로직

```javascript
let gifts = ['전자기기','문화상품권','명품백']
let 소연 = []
let 지훈 = []
let 채원 = []

for(let gift in gifts){
  console.log(gifts[gift].length);

  if(gifts[gift].length === 3) {
    소연.push(gifts[gift]);
  }
  if(gifts[gift].length === 4) {
    지훈.push(gifts[gift]);
  }
  if(gifts[gift].length === 5) {
    채원.push(gifts[gift]);
  }
}

console.log(`소연 : ${소연}`);
console.log(`지훈 : ${지훈}`);
console.log(`채원 : ${채원}`);
```

<br />

2. switch문을 이용한 로직

```javascript
let gifts = ['전자기기','문화상품권','명품백']
let 소연 = []
let 지훈 = []
let 채원 = []

for(let gift in gifts){
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
```
