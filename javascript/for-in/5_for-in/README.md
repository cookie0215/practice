
# [Practice] For문

💙 문제 :  
한 반에 3명의 학생이 있다.  
이번 중간고사로 영어, 미술, 과학 시험을 봤다.  
**과목중 하나라도 70점 이하의 점수를 받은 사람이 있다면, 이름과 70점 이하의 과목과 해당하는 점수를 반환해주세요.**

```javascript
const midExam = [
  {name:'amy', english:78, art:100, science:58},
  {name:'bob', english:82, art:92, science:76},
  {name:'chris', english:86, art:78, science:64}
]
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

1. for in을 사용해서 배열을 반복 돌면서, 각 객체데이터를 반환
2. *각 객체의 key와 value를 각각 반환* (중첩 for in문)
3. 반환된 value 중 70이하인 value를 찾는다.

<br>
<br>


## 😥 처한 문제점

<br>

→ 한 과목이라도 70점 이하 점수를 맞은 학생의 이름은 출력했는데....  
70점이하인 과목과 그 해당 점수를 반환하지 못했다...  

내가 놓쳤던 것)  
배열 안의 데이터를 각 객체 형태로 반환했으나, 정작 for in문을 한번 더 중첩으로 사용해 각 객체데이터의 value값을 구했어야 했다. 
(객체의 각 key, value값을 반복해서 출력하고 싶을 때 for in을 사용할 수 있다.)
그리고 그 각 객체의 value값을 토대로 70점 이하라면 해당 과목과 점수를 출력하도록 만들면 된다!.

<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
const midExam = [
  {name:'amy', english:78, art:100, science:58},
  {name:'bob', english:82, art:92, science:76},
  {name:'chris', english:86, art:78, science:64}
]

for(let index in midExam){
  // console.log(midExam[index]);
  for(let key in midExam[index]){    
    const value = midExam[index][key];
    
    if(value <= 70){
      // console.log(value);
      // console.log(key , midExam[index][key]);
      console.log(`이름: ${midExam[index].name}, 과목:${key} , 점수: ${value}`);
    }
  }
}

// 이름: amy, 과목:science , 점수: 58
// 이름: chris, 과목:science , 점수: 64
```

