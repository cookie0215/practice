# [Practic] For문

💙문제 : for문을 활용해서 주어진 문자를 거꾸로 출력하기

<br>

```javascript
let str = "안녕하세요";

// 출력결과 : 요세하녕안
```

<br>
<br>

🤔 어떻게 풀지 고민해보자!

1. 일단 str문자열을 각각의 낱말로 쪼갠다.  
  → string관련 속성 중 split로 문자열을 쪼개고 쪼갠 문자들을 배열로 반환한다!

2. 쪼갠 문자들을 변수arr에 담는다.

3. 빈 배열을 하나 만들어 놓는다. (새로운 주머니를 하나 만들어 두는 것!)

4. 빈 배열에 쪼개 놓은 문자들을 담아야 하는데, 이때 반복문을 이용해서 arr의 아이템들을 거꾸로 하나씩 뽑아서 담는다.

<br>
<br>

✔️ 내가 작성한 코드

```javascript
let str = '안녕하세요';
const arr = str.split("");
let newArr = [];

console.log(str);
console.log(arr);



for(let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(newArr);
// ['요', '세', '하', '녕', '안']
```