const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector('.calculator_body');
const operator = document.querySelector('.operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const display = document.querySelector('.calculator_display'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
var element;


function calculate(n1, operator, n2) {
    let result = 0;
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    console.log("n1 : " + n1);
    console.log("n2 : " + n2);
  
    n1 = Number(n1);
    n2 = Number(n2);
  
    if (operator === "+") {
      result = parseFloat(n1) + parseFloat(n2);
    }
  
    else if (operator === "-") {
      result = parseFloat(n1) - parseFloat(n2);
    }
  
    else if (operator === "*") {
      result = parseFloat(n1) * parseFloat(n2);
    }
  
    else if (operator === "/") {
      result = parseFloat(n1) / parseFloat(n2);
    }
  
  
    return String(result);
  }

//버튼이 눌렀을 때 작동하는 함수.
buttons.addEventListener('click', function (event) {
    const target = event.target; //클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML엘리먼트에 클래스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.

    if (target.matches("button")) {
        if (action === "digits") {
            console.log(display.textContent);

            if (previousKey === "operator") {
                if (previousNum !== undefined) {
                    previousNum = previousNum + buttonContent;
                    display.textContent = previousNum;
                }
                else {
                    display.textContent = buttonContent;
                    previousNum = buttonContent;
                }
                return;
            }
            if (display.textContent === "0" && buttonContent !== "0") {
                display.textContent = buttonContent;
            }
            else if (display.textContent !== "0") {
                display.textContent = display.textContent + buttonContent;
            }
            firstNum = display.textContent;
        }

        if (action === "operator") {
            if (previousKey === "operator" && previousNum != undefined) {

                display.textContent = calculate(firstNum, operatorForAdvanced, previousNum);
              }
        
              operatorForAdvanced = buttonContent;
              firstNum = display.textContent;
              previousKey = "operator";
              previousNum = undefined; //keypoint
        
        }

        if (action === "comma") {
            if (previousKey !== "operator" && !display.textContent.includes(".")) {
                firstNum = firstNum + ".";
                display.textContent = display.textContent + ".";
              }
        
              if (previousNum === undefined && !display.textContent.includes(".")) {
                previousNum = "0.";
                display.textContent = previousNum;
              }
        
              else if (previousKey === "operator" && !display.textContent.includes(".")) {
                previousNum = previousNum + ".";
              }
        }

        if (action === "clear") {
            display.textContent = 0;
            previousKey = undefined;
            previousNum = undefined;
            firstNum = 0;
        }

        if (action === "calculate") {
            if (previousKey === "operator") {
                if (previousNum === undefined) {
                  display.textContent = calculate(firstNum, operatorForAdvanced, firstNum);
                }
                else {
                  display.textContent = calculate(firstNum, operatorForAdvanced, previousNum);
                }
                firstNum = display.textContent;
              }
              else if (previousKey === "calculate" && previousNum !== undefined) {
                display.textContent = calculate(firstNum, operatorForAdvanced, previousNum);
                firstNum = display.textContent;
                saveNum = previousNum;
              }
              else if (previousKey === "calculate" && previousNum === undefined) {
        
              }
              previousKey = "calculate";
        }

    }
  operator_addClass(target); //버튼 클래스 추가

})


function operator_addClass(target) {
    element = document.getElementsByClassName("operator");
    for (var i = 0; i < element.length; i++) {
  
      var temp = element.item(i);
      if (temp === target) {
        temp.classList.add("isPressed");
        savetarget = target;
      }
      else {
        temp.classList.remove("isPressed");
      }
    }
  }