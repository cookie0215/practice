
# [Practice] For๋ฌธ

๐ ๋ฌธ์  :  
์ ๋ ์นดํ๋ฅผ ์ด์ํ๊ณ  ์์ต๋๋ค.  
๋ฉ๋ด๋ฅผ ์ ์ ํ๋ ค๊ณ  ํ๋๋ฐ , ๋จ์ 5๋ช ์ฌ์ 3๋ช์ ๋์์ผ๋ก ์ค๋ฌธ์กฐ์ฌ๋ฅผ ์งํํ์ต๋๋ค.   
์ค๋ฌธ์กฐ์ฌ ๊ฒฐ๊ณผ ๋จ์ 3๋ช์ ์ผ์ดํฌ๋ฅผ ์ถ๊ฐํ๊ธธ ์ํ๊ณ , 2๋ช์ ์ปคํผ๋ฅผ , ์ฌ์ 2๋ช์ ์์ด์คํฐ , ์ฌ์ 1๋ช์ ์ค๋ฌด๋๋ฅผ ์ถ๊ฐํ๊ธฐ๋ฅผ ์ํฉ๋๋ค. 

**๋ฉ๋ด๋ฅผ ์์งํด์ ์์๋ฅผ ์ด๊ฑฐํด์ฃผ์ธ์.**

*์กฐ๊ฑด : ๋ชจ๋  ๋จ์๋ค๊ณผ ์ฌ์๋ค์ ๋ฉ๋ด๋ฅผ ํฉ์ณ ๋์ ๋ฆฌ์คํธ๋ฅผ ๋ง๋ค์ด์ ๊ทธ ๋ฆฌ์คํธ์์ ์ค๋ณต๊ฐ์ ๋นผ์ ๊ฐ์ ์ด๊ฑฐํ  ๊ฒ. (๋ฉ๋ด๋ฅผ ํ๋์ฉ๋ง ์ด๊ฑฐํ ๊ฒ)*

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

## ๐ค ์ด๋ป๊ฒ ํ์ง ๊ณ ๋ฏผํด๋ณด์!

<br>

0. ๋์ ์ผ๋ก ul ์์ ์์ฑํ๊ธฐ 

1. survey ๋ฐฐ์ด ๊ฐ์ฒด๋ฅผ for of๋ก ์ํํ๋ค.  
  { gender: 'man', menu: 'cake' },   
  { gender: 'man', menu: 'cake' },   
  ...(์ค๋ต)...  

2. menuList๋ผ๋ ๋น ๋ฐฐ์ด์ ๋ง๋ค์ด์ ๊ฐ ๋ฐฐ์ด๊ฐ์ฒด ์์ดํ๋ค ์ค menu์ ๊ฐ์ ๋ฃ๋๋ค.    
  โ menuList = ['cake', 'cake', 'cake', 'coffee', 'coffee', 'icetea', 'icetea', 'smoothie']    

3. menuList์์ ์ค๋ณต๋ ์์๋ ์ ๊ฑฐํด์ผ ํ๊ธฐ ๋๋ฌธ์ menuList์์ item.menu๊ฐ์ด ์์ผ๋ฉด ํด๋น ๊ฐ์ meunList์ ์ถ๊ฐํ๋๋ก ์กฐ๊ฑด๋ฌธ์ ์์ฑ

4. liํ๊ทธ๋ฅผ ๋์ ์ผ๋ก ์์ฑํ๋ค.

5. menuList์์ ๊ฐ ์์๋ค์ li์ ๋ฃ๊ธฐ ์ํด ๋ฐ๋ณต๋ฌธ์ ์์ฑํ๋ค.

<br>
<br>


## ๐ฅ ์ฒํ ๋ฌธ์ ์ 

<br>

for of๋ก survey๋ฅผ ์ํํ๋ฉด์ ๊ฐ ๋ฐฐ์ด๊ฐ์ฒด์ menu ๊ฐ์ ์ป์ด๋๋ค.
๊ทธ๋ฆฌ๊ณ  ๊ฐ menu๊ฐ๋ค์ ์ค๋ณต๋์ง ์๊ฒ ์ถ์ถํด์ผ ํ๋ค.

๊ทธ๋์ ๋น ๋ฐฐ์ด์ ๋ง๋ค์ด ๊ทธ๊ณณ์ item.menu๋ฅผ ๋ฃ์ ๋,  
์๋ก ๋ง๋  ๋น ๋ฐฐ์ด์ ์ด์ ์ ๋ฃ์ item.menu๊ฐ์ด ์๋ค๋ฉด ์ถ๊ฐํ์ง ์๊ณ , ์๋ค๋ฉด ํด๋น item.menu๊ฐ์ด ์ค๋ณต๋์ง ์๊ณ  ์ถ๊ฐ๋  ์ ์๋๋ก ์์ฑํ๋ค!

<br>
<br>


## โ๏ธ ๋ด๊ฐ ์์ฑํ ์ฝ๋

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

