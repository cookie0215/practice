
# [Practice] For문

💙 문제 :  
오늘 내가 해야하는 일을 적어놓고 완료된 일은 true, 아직 완료하지 못한 일은 false로 적었습니다.
**전체 목록에서 내가 완료한 일의 갯수와 내가 완료한 일이 전체에서 얼마나 달성했는지 퍼센트로 구하기**
(소수점 발생 시, 반올림 처리한다.)

```javascript
const todoList = [
  { work: "vue공부하기", finish: false },
  { work: "방청소하기", finish: true  },
  { work: "과자 만들기", finish: false },
  { work: "알고리즘 풀기", finish: true },
  { work: "멍군이랑 산책가기", finish: true },
  { work: "필라테스 수업가기", finish: false },
  { work: "태권도 가기", finish: false }
]
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

> 퍼센트 계산하기 : 완료한 일 / 전체 * 100

<br>

1. 배열의 전체 길이 (해야할 일 전체갯수를 구하기)
2. 아직 하나도 완료못했을 때 finishCount = 0;
3. finish값이 true와 일치하면 finishCount(완료한 갯수) 하나씩 증가
4. 전체목록에서 완료한 일을 나누고 * 100 로 계산하면 %가 계산된다.(반복,조건문 밖에 작성해야 한다!)
5. 소수점 이하는 반올림 처리해야 하기 때문에 수학객체 Math.round()를 사용

<br>
<br>


## 😥 처한 문제점

<br>

완료한 일이 있다면 finishCount가 1개씩 증가하도록 만든 후, 그 if문안에 %값을 계산하도록 만들었다.
그래서 완료한 일이 하나도 없을땐 undefined로 퍼센트 값이 출력되는 것 문제를 발견했다...!
→ finish값이 true가 아닌 경우에도 %계산이 될 수 있도록 작성해야 하기 때문에 if문 밖에 작성되도록 해야 한다!

<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
const todoList = [
  { work: "vue공부하기", finish: false },
  { work: "방청소하기", finish: true  },
  { work: "과자 만들기", finish: false },
  { work: "알고리즘 풀기", finish: true },
  { work: "멍군이랑 산책가기", finish: true },
  { work: "필라테스 수업가기", finish: false },
  { work: "태권도 가기", finish: false }
]

const total = todoList.length;
// console.log(total);

let finishCount = 0;

for(let i in todoList){
  // console.log( todoList[i] );

  if( todoList[i].finish === true) {
    finishCount++;
  }
}

const per = Math.round(finishCount / total * 100);
console.log(`완료한 갯수 : ${finishCount} , 달성률 : ${per} %`);
```

