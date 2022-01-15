const storage = [
  '⚽ 축구공',
  '🔬 현미경',
  '📻 라디오',
  '⚾ 하얀 야구공',
  '🎥 비디오카메라',
  '🥎 노란 야구공',
  '🧶 초록 털실',
  '🏐 햐얀 배구공',
  '🏀 농구공',
  '🎴 화투',
  '🎮 게임기',
  '🏈 럭비공',
  '🏆 트로피',
  '🎱 볼링공',
]

let room1 = [];
let room2 = [];

storage.forEach((item) => {
  if (item.includes('공')) {
    room1.push(item);
  } else {
    room2.push(item)
  }
})

console.log(room1);
console.log(room2);


