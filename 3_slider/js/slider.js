const slides = document.querySelector('.slides');
const slideItems = slides.querySelectorAll('.slides > *');

/* DOM 생성 : slide_container & slide_wrap */
const slideContainer = document.createElement('div');
const slideWrap = document.createElement('div');
slideContainer.classList.add('slide_container');
slideWrap.classList.add('slide_wrap');

slides.parentNode.insertBefore(slideContainer,slides);
slideContainer.appendChild(slideWrap);
slideWrap.appendChild(slides);

/* DOM 생성 : arrow버튼 */
const arrowBtn = document.createElement('div');
const prevBtn = document.createElement('a');
const nextBtn = document.createElement('a');
const prevBtnImg = document.createElement('img');
const nextBtnImg = document.createElement('img');
arrowBtn.classList.add('arrow_btn');
prevBtn.classList.add('prev');
nextBtn.classList.add('next');

slideContainer.appendChild(arrowBtn);
arrowBtn.appendChild(nextBtn);
nextBtn.appendChild(nextBtnImg);

arrowBtn.insertBefore(prevBtn, nextBtn);
prevBtn.appendChild(prevBtnImg);

prevBtnImg.setAttribute('src','img/btnPrev.png');
nextBtnImg.setAttribute('src','img/btnNext.png');


let currentSlide = 0;
let totalSlide = slideItems.length;             // 전체 슬라이드 갯수
let slideHeight = 0;



// 각 slide 너비,높이, slide class명 붙이기
// function slideSize(){

slideItems.forEach((slideItem) => {
  slideItem.classList.add('slide');
  slideItem.style.width = `${100 * totalSlide}%`;

  // if( slideItem.offsetHeight > slideHeight ){
  //   slideHeight = slideItem.offsetHeight;
  // }
  // console.log(slideHeight);
})
// }

// ul.slides 너비
slides.style.width = `${slideItems[0].width * totalSlide}%`;
console.log(slideItems[0].width, slides.style.width );


// slideContainer.style.height = `${slideHeight}px`;
// slideWrap.style.height = `${slideHeight}px`;

// slideSize();

/* prev , next버튼 클릭 시 */
// prevBtn.addEventListener('click',(e) => {
//   prevSlide(currentSlide - 1);
//   console.log(slides.style.left);
// });

// nextBtn.addEventListener('click',(e) => {

//   nextSlide(currentSlide + 1);
//   console.log(slides.style.left);
// });


// function makeClone(){
//   let cloneFrontSlide = slideItems[0].cloneNode(true);
//   let cloneBackSlide = slideItems[slideCount - 1].cloneNode(true);

//   slides.insertBefore(cloneFrontSlide,slideItems[0]);
//   slides.appendChild(cloneBackSlide);

//   newWidth();
//   setInitPosition();
// }

// makeClone();

// function newWidth(){
//   const cloneSlideItems = document.querySelectorAll('.slides > *');
//   slides.style.width = `${100 * cloneSlideItems.length}%`;
//   console.log(cloneSlideItems, slides.style.width);
// }

// function setInitPosition(){
//   let initLeftValue = `-${slideItems[0].clientWidth}px`;
//   slides.style.left = initLeftValue;
// }

// function nextSlide(num){
//   slides.style.left = `${-100 * num}%`;
//   slides.style.transition = `.5s`
//   currentSlide = num;
//   console.log(currentSlide,slideCount);

//   if(currentSlide === slideCount){
//     slides.style.left = `${-100 * num}%`;
//     currentSlide = 0;
//   }
// }

// function prevSlide(num){
//   slides.style.left = `${100 * num}%`;
//   slides.style.transition = `.5s`
//   currentSlide = -num;
//   console.log(currentSlide,slideCount);

//   if(currentSlide === slideCount){
//     slides.style.left = `${100 * num}%`;
//     currentSlide = num;
//   }
// }
