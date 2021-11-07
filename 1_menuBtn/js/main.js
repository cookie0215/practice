const gnb = document.querySelector("#gnb");
const menu = gnb.querySelectorAll("li");

menu.forEach((el, index) => {
    el.addEventListener('click',(e) => {
        e.preventDefault;
        activation(index);
    });
})

function activation(index){
    // 클릭 안한 메뉴 버튼 비활성화
    for(let menuList of menu){
        menuList.style.borderBottom = "none";
        menuList.querySelector("a").style.color = "#555";
        menuList.querySelector("a").style.fontWeight = "normal";
    }

    // 클릭한 메뉴 버튼 활성화
    menu[index].style.borderBottom = "4px solid orange";
    menu[index].querySelector("a").style.color = "orange";
    menu[index].querySelector("a").style.fontWeight = "bold";
}