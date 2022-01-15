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