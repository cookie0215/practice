
# [Practice] For문

💙 문제 :  
세일행사가 있습니다.   
**오늘 해당하는 행사를 찾아 결과값을 출력하세요**

```javascript
const sales = [
  {day : '월요일',
  event : '의류세일',
  place :'5층'},
  {day : '화요일',
  event : '식료품세일',
  place : '지하1층'},
  {day : '수요일',
  event : '주방용품세일',
  place : '7층'},
  {day : '목요일',
  event : '베이커리세일',
  place : '지하1층'},
  {day : '금요일',
  event : '치킨반값세일',
  place : '지하1층'},
  {day : '토요일',
  event : '전자제품세일',
  place :'8층'},
  {day : '일요일',
  event : '가구세일',
  place :'8층'},
]
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

1. new Date로 오늘 날짜 가져오기
2. 오늘 날짜 중 요일만 추출

<br>
<br>


## 😥 처한 문제점

<br>
❓ getDay()로 요일을 구하면 0(일요일) ~ 6(토요일) 중 오늘에 해당하는 요일이 숫자로 반환된다.    
숫자로 반환되는 것을 다시 문자로 바꿔서 sales 배열객체 안에 있는 key 중 day와 일치하는 요소를 찾아야 한다.       

→ week이라는 일요일부터 ~ 토요일까지 문자열로 담긴 배열을 하나 작성한다.
그리고 week배열의 순번과 sales 배열 객체의 day와 일치하는 요소를 추출할 수 있다.

🤔 그런데 week배열을 만들었으니 0 ~ 6 까지 직접 index번호를 지정해주면되는데 왜 new Date객체를 사용했는가?    

→ 요일을 동적으로 처리할 수 있기 때문     
(문제에서 직접적으로 딱 요일을 지정하지 않았다!)

<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
let week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let today = new Date;
let $day = today.getDay();
console.log($day);

function todaySale() {
  for (let item of sales) {
    if (item.day === week[$day]) {
      console.log(item.event, item.place);
    };
  }
}

todaySale()
```

