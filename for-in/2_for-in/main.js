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