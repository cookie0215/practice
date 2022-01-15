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

console.log(average);