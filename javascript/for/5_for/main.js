const todoList = [
  '영어 회화 공부하기',
  '새벽 운동하기',
  '매일 프론트엔드 공부하기',
  '좋은 회사에 취업하기',
  '봉사활동하기',
  '제과제빵 배우기',
  '제주도 한달살기',
  '클라이밍 배우기',
  '프리다이빙 자격증 취득하기',
  '한달에 1번 헌혈하기',
  '1억 모으기',
  '영상편집 배우기',
  '지게차 자격증 따기',
  '해외여행가기',
  '스페인 산티아고 순례길 걷기',
  '마라톤 완주'
]

let newArr = [];
const num = todoList.length / 4;
console.log(num);

const body = document.querySelector('body');
const ul = document.createElement('ul');

body.appendChild(ul);

for(let i = 0; i <= todoList.length; i++){
  newArr.push(todoList.splice(0, num));
  
  const li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `${ i + 1 }분기 : ${newArr[i]}`;
}

console.log(newArr);