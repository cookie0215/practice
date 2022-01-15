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

function cafeMenu() {
  const container = document.querySelector('.container');
  const ul = document.createElement('ul');
  container.appendChild(ul);


  for (let item of survey) {

    if (!menuList.includes(item.menu)) {
      menuList.push(item.menu);

      const li = document.createElement('li');

      for (let i = 0; i < menuList.length; i++) {
        ul.appendChild(li);
        li.textContent = menuList[i]
      }
    }
  }
  console.log(menuList);
}

cafeMenu();
