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
