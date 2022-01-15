
# [Practice] For문

💙 문제 : 
민수는 방학을 맞이해서 학원 방학 특강을 신청하기로 했습니다.  
민수는 과학과 영어를 들어야 합니다.   
**시간표중에 민수가 들을 과목과 요일을 출력하세요.** 

```javascript
let list =[
	{subject : '과학의 기초', day : '월요일'},
  {subject : '수학의 기초', day : '월요일'},
	{subject : '영어 심화2', day : '월요일'},
	{subject : '국어', day : '월요일'},
	{subject : '수학 심화1', day : '수요일'},
	{subject : '수학 심화2', day : '금요일'},
	{subject : '과학 심화', day : '수요일'},
	{subject : '국어 완성', day : '수요일'},
	{subject : '영어 기초', day : '금요일'},
]
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

1. 배열안의 각 배열 객체들을 순회.
2. 객체의 프로퍼티 key 중 subject에 '과학' 또는 '영어'라는 문자가 있다면 해당 과목과 요일을 출력

<br>
<br>

## ✔️ 내가 작성한 코드

```javascript
let list =[
	{subject : '과학의 기초', day : '월요일'},
  {subject : '수학의 기초', day : '월요일'},
	{subject : '영어 심화2', day : '월요일'},
	{subject : '국어', day : '월요일'},
	{subject : '수학 심화1', day : '수요일'},
	{subject : '수학 심화2', day : '금요일'},
	{subject : '과학 심화', day : '수요일'},
	{subject : '국어 완성', day : '수요일'},
	{subject : '영어 기초', day : '금요일'},
]

function timeTable() {
  for(let item of list) {
    // console.log(item);
    if(item.subject.includes('과학') || item.subject.includes('영어')) {
      console.log(item.subject, item.day);
    }
  }
}

timeTable();
```

