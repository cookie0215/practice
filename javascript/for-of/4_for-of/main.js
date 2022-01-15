const sales = [
  {
    day: '월요일',
    event: '의류세일',
    place: '5층'
  },
  {
    day: '화요일',
    event: '식료품세일',
    place: '지하1층'
  },
  {
    day: '수요일',
    event: '주방용품세일',
    place: '7층'
  },
  {
    day: '목요일',
    event: '베이커리세일',
    place: '지하1층'
  },
  {
    day: '금요일',
    event: '치킨반값세일',
    place: '지하1층'
  },
  {
    day: '토요일',
    event: '전자제품세일',
    place: '8층'
  },
  {
    day: '일요일',
    event: '가구세일',
    place: '8층'
  },
]

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