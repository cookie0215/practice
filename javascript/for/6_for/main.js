const list = ['생선',50,'바나나',400,700]
let bag = []
let wallet = []

for(let i = 0; i < list.length; i++){
  // console.log(list[i]);

  if(typeof list[i] === 'string'){
    bag.push(list[i]);
  }else if(typeof list[i] === 'number'){
    wallet.push(list[i]);
  }
}

console.log(`👜 bag : ${bag}`);
console.log(`👛 wallet : ${wallet}`);