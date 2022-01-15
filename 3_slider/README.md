# 반응형 Slider 구현하기
바닐라 자바스크립트로 slider를 직접 구현하였습니다.

<br>
<br>

# 작업 과정 정리

### html 및 css

<br>

1. ul태그와 li태그를 이용해 slide를 만들기 전, slide를 크게 감싸기 위해 slide_container와 slide_wrap을 만든다.  
  → slider_wrap으로 한번 더 감싼 이유는 arrow 버튼이 추가될 경우를 가정했을 때 slide_container기준으로 arrow버튼 배치를 수월하게 하기 위함이다.

2. slide_container의 size를 지정해준다.

3. ul.sldies 의 size는 1개의 li.slide 의 크기 * li.slide 총 갯수를 곱한 값으로 측정한다.  
*ex) li.slide 갯수가 3개니까 ul.slides의 너비는 100% * 3로 지정*

4. li는 직접적으로 px을 정해주는 것 보다, %로 지정해야 유동적으로 slide를 만들 수 있다.  
  → `width: calc(100% / 3);`  
  이렇게 작성한 이유는 너비를 %로 작성 시, 부모요소 기준으로 너비값이 상속되기 때문에 여기서 100%는 ul.slides에 지정된 너비값 100%를 의미하기 때문에 각 li 너비를 주려면 100%에서 li 갯수 만큼 나누면 된다!  
  *ex) 위에서 ul.slides의 너비를 100% * 3으로 설정해서 300%인 상태이고, li의 너비를 작성해야 해서 ul.slides 너비에서 3으로 나눈 것이다. (li.slide 총 갯수가 3개이기 때문)*

🔸 css에 작성한 slide너비값은 나중에 js에서 다시 작성할 예정이므로, 임시로 작성하는 것이다.

<br>

### js
ul.slides와 li.slide만 남기고 나머지는 모두 dom을 직접 생성해서 만들 예정

<br>

1. ul.slides와 li.slide에 대한 변수를 만든다.

2. ul.slides와 li.slide를 제외한 나머지 DOM을 스크립트에서 생성한다.  
  → ul.slides를 기준으로 생성한 dom들을 붙여야 하는데, slide_container와 slide_wrap을 만든 뒤, 먼저 `slides.parentNode.insertBefore(slideContainer,slides);` 를 이용해 slide_container를 붙인다.  
  → 그리고 slide_container안에 하나씩 slide_wrap과 ul.slide를 옮겨 넣는다.

3. `const currentSlide = 0` 슬라이드가 시작되는 기준점과 `const sldieHeight = 0;` 각 슬라이드 중 높이가 가장 긴 슬라이드가 ul의 높이가 될 수 있도록 변수에 담는다.

4. 각 li.slide 너비와 ul.slides 너비를 구한다.  
  → ul.slides에 대한 dom을 기준으로 작성하고, ul.slides안에 있는 모든 li요소에 slide라는 class명을 추가할 수 있도록 만든다. 그리고 각 li.slide너비도 구한다

5. (보류) slide의 높이가 각각 다를 수 있기 때문에 스크립트로 높이를 구한다.

6. arrow_btn 역시 dom을 직접 생성하여 붙여 넣는다.

7. 각 prev버튼 , next버튼을 클릭해서 슬라이드가 좌우로 이동할 수 있게 만든다.  
  → next버튼 클릭 시, ul의 left값이 0 → -100% → -200% 이렇게 이동되며, 현재 슬라이드의 번호도 바뀐다 (li.slide 너비만큼 왼쪽으로 이동하는 것이기 때문에 li.slide하나의 너비를 변수로 만들어야 한다.)

8. 무한루프만들기 : clone 슬라이드 생성하면서 li.slide가 추가되었기 때문에 cloneSlide까지 모두 포함될 수 있도록 ul.slides의 너비가 변경되어야 한다. 

9. 현재 cloneFrontSlide가 맨 처음 위치해 있으므로 ul.slides의 위치를 왼쪽으로 더 이동 시켜놓아야 한다.

10. 
<br>
<br>

## ⛔ 문제점 & 해결 방법


<br>
<br>

## ✨ 작업하면서 알게된 점
- ul.slides를 기준으로 만들어야 하기 때문에 부모요소를 만들어 붙이는 것이 처음엔 쉽지 않았는데, insertBefore 를 이용해 아예 slide_container를 처음에 붙인 뒤, ul.slides를 옮겨 넣는 발상의 전환이 필요했다.

<br>
<br>