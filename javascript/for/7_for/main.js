const midExam = [
  {name:'amy', english:78, art:100, science:58},
  {name:'bob', english:82, art:92, science:76},
  {name:'chris', english:86, art:78, science:64}
]

// [전체 평균점수: n점 / 영어 평균점수: n점 / 미술 평균점수: n점 / 과학 평균점수: n점]

let totalEng = 0, 
    totalArt = 0 ,
    totalScience = 0;

let avrageEng;
let avrageArt;
let avrageScience;

for(let i = 0; i < midExam.length; i++){
  
  let {english , art , science} = midExam[i];
  // console.log(english , art , science);
  console.log(english.indexOf());


  totalEng += english;
  // avrageEng = totalEng;

  totalArt += art;
  totalScience += science;
}

// console.log(totalEng, totalArt , totalScience);
// console.log(avrageEng, avrageArt , avrageScience);