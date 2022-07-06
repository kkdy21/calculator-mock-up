# Calculator 구현하기
---

## Wire  frame
- 

## HTML
-  <div class="calculator"></div> 전체 계산기 틀
-  <div class="calculator_display"></div> 계산기의 디스플레이 부분
- <div class="calculator_body"></div> 계산기 바디 부분
- <div class="modifier"></div>
- <div class="calculator_keyPad_layout">
  <button class="digits"/>7</button> 버튼 숫자 부분
  <button class="digits"/>8</button> 버튼 숫자 부분
  <button class="digits"/>9</button> 버튼 숫자 부분
  <button class="operator">+</button> 버튼 연산자 부분
  </div> 계산기 바디 안의 키패드 레이아웃

- 계산기 키패드 의 버튼(숫자, 연산자)은 <button> 엘리먼트를 사용해 구현
- 나머지 레이어들은 <div></div> 엘리먼트를 이용해서 구현]

### class
  - calculator : 전체 계산기 레이아웃
  - calculator_display : 계산기의 디스플레이 부분
  - calculator_body : 계산기의 바디 부분
  - modifier : `AC` , `Enter` 버튼
  - calculator_keyPad_layout : 계산기 키패드의 레이아웃
  - digits : 키패드의 숫자 부분
  - operator : 키패드의 연산자

### id
  - comma : 콤미 버튼
  - digit_zero : 숫자 0 버튼

## CSS
- flexbox 최대한 이용해서 만들기
