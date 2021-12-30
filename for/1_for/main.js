let str = '안녕하세요';
const arr = str.split("");
let newArr = [];

console.log(str);
console.log(arr);



for(let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(newArr);
// ['요', '세', '하', '녕', '안']

console.log(newArr.join(""));
// 요세하녕안