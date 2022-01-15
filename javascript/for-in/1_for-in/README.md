
# [Practice] For문

💙 문제 :  
우리 유치원 아이들은 각자 좋아하는 칭찬스티커가 있습니다.   서로 좋아하는 스티커를 갖고 싸우지 않도록 하기 위해 ‘누가’ ‘어떤’ 스티커를 좋아하는지 기록해 뒀습니다.   
**오늘 반 아이들에게 칭찬스티커를 주기위해 프린트를 하려고 하는데, 무엇을 몇장 프린트해야 하는지 구해주세요.**

```javascript
const favSticker = {
	"은지" : "뽀로로",
  "태현" : "티라노사우르스",
  "미림" : "아기상어",
  "미영" : "아기상어",
  "을수" : "뽀로로"
}
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>



<br>
<br>


## 😥 처한 문제점

<br>


<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
const avengers = [
  { 
    name: 'IronMan',
    age: 43
  },
  { 
    name: 'Hulk',
    age: 46
  },
  { 
    name: 'Hawkeye',
    age: 37
  },
  { 
    name: 'SpiderMan',
    age: 21
  },
  { 
    name: 'Thor',
    age: 100
  },
  { 
    name: 'BlackWidow',
    age: 47
  }
];

let sum = 0;
let len = avengers.length;
// console.log(len);

let average;

for(let index in avengers){
  // console.log(avengers[index].age);
  sum = sum + avengers[index].age;
  average = sum / len
}

console.log(average);    // 49
```

