# sldier 구현하기
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

<br>

### js

<br>

1. f

<br>
<br>

## ⛔ 문제점 & 해결 방법


<br>
<br>

## ✨ 작업하면서 알게된 점

<br>
<br>