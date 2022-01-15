
# [Practice] For문

💙 문제 :  
저는 카페를 운영하고 있습니다.  
메뉴를 선정하려고 하는데 , 남자 5명 여자 3명을 대상으로 설문조사를 진행했습니다.   
설문조사 결과 남자 3명은 케이크를 추가하길 원하고, 2명은 커피를 , 여자 2명은 아이스티 , 여자 1명은 스무디를 추가하기를 원합니다. 

**메뉴를 수집해서 요소를 열거해주세요.**

*조건 : 모든 남자들과 여자들의 메뉴를 합쳐 놓은 리스트를 만들어서 그 리스트에서 중복값을 빼서 값을 열거할 것. (메뉴를 하나씩만 열거할것)*

```javascript
const survey = [
  { gender: 'man', menu: 'cake' },
  { gender: 'man', menu: 'cake' },
  { gender: 'man', menu: 'cake' },
  { gender: 'man', menu: 'coffee' },
  { gender: 'man', menu: 'coffee' },
  { gender: 'woman', menu: 'icetea' },
  { gender: 'woman', menu: 'icetea' },
  { gender: 'woman', menu: 'smoothie' },
]
```

<br>
<br>

## 🤔 어떻게 풀지 고민해보자!

<br>

0. 동적으로 ul 요소 생성하기 

1. survey 배열 객체를 for of로 순회한다.  
  { gender: 'man', menu: 'cake' },   
  { gender: 'man', menu: 'cake' },   
  ...(중략)...  

2. menuList라는 빈 배열을 만들어서 각 배열객체 아이템들 중 menu의 값을 넣는다.    
  → menuList = ['cake', 'cake', 'cake', 'coffee', 'coffee', 'icetea', 'icetea', 'smoothie']    

3. menuList안에 중복된 요소는 제거해야 하기 때문에 menuList안에 item.menu값이 없으면 해당 값을 meunList에 추가하도록 조건문을 작성

4. li태그를 동적으로 생성한다.

5. menuList안의 각 요소들을 li에 넣기 위해 반복문을 작성한다.

<br>
<br>


## 😥 처한 문제점

<br>

for of로 survey를 순회하면서 각 배열객체의 menu 값을 얻어냈다.
그리고 각 menu값들을 중복되지 않게 추출해야 했다.

그래서 빈 배열을 만들어 그곳에 item.menu를 넣을 때,  
새로 만든 빈 배열에 이전에 넣은 item.menu값이 있다면 추가하지 않고, 없다면 해당 item.menu값이 중복되지 않고 추가될 수 있도록 작성했다!

<br>
<br>


## ✔️ 내가 작성한 코드

```javascript
const survey = [
  { gender: 'man', menu: 'cake' },
  { gender: 'man', menu: 'cake' },
  { gender: 'man', menu: 'cake' },
  { gender: 'man', menu: 'coffee' },
  { gender: 'man', menu: 'coffee' },
  { gender: 'woman', menu: 'icetea' },
  { gender: 'woman', menu: 'icetea' },
  { gender: 'woman', menu: 'smoothie' },
]

let menuList = [];

function cafeMenu(){
  const container = document.querySelector('.container');
  const ul = document.createElement('ul');
  container.appendChild(ul);
  

  for(let item of survey) {
    
    if(!menuList.includes(item.menu)){
      menuList.push(item.menu);

      const li = document.createElement('li');
      
      for(let i = 0; i < menuList.length; i++) {
        ul.appendChild(li);
        li.textContent = menuList[i]
      }
    }
  }
  console.log(menuList);
}

cafeMenu();

```

