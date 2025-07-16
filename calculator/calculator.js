/* ----- 전역 변수 ----- */
const operators = ["+", "-", "*", "/"];        // 유효 연산자
let currentInput = "";                         // 화면에 입력 중인 숫자
let firstNumber  = null;                       // 첫 번째 피연산자
let operator     = null;                       // 현재 연산자
var result       = null;                       // var 사용 예시
let history      = [];                         // 계산 기록 저장

/* ----- 숫자 버튼 ----- */
function appendNumber(num){
  if(!/^[0-9]$/.test(num)){                // 0~9가 아니면
    showError("유효한 숫자를 입력하세요."); return;
  }
  currentInput += num;
  document.getElementById("display").value = currentInput;
}

/* ----- 연산자 버튼 ----- */
function setOperator(op){
  if(!operators.includes(op)){showError("유효한 연산자가 아닙니다."); return;}
  if(currentInput === ""){showError("숫자를 먼저 입력하세요."); return;}

  firstNumber = Number(currentInput);
  if(isNaN(firstNumber)){showError("첫 번째 숫자가 유효하지 않습니다."); return;}

  operator = op;
  currentInput = "";
  document.getElementById("display").value = "0";
}

/* ----- = 버튼 ----- */
function calculate(){
  if(firstNumber === null || operator === null || currentInput === ""){
    showError("계산을 수행할 수 없습니다."); return;
  }
  const secondNumber = Number(currentInput);
  if(isNaN(secondNumber)){showError("두 번째 숫자가 유효하지 않습니다."); return;}
  if(operator === "/" && secondNumber === 0){showError("0으로 나눌 수 없습니다."); return;}

  switch(operator){
    case "+": result = firstNumber + secondNumber; break;
    case "-": result = firstNumber - secondNumber; break;
    case "*": result = firstNumber * secondNumber; break;
    case "/": result = firstNumber / secondNumber; break;
    default : showError("알 수 없는 연산자입니다."); return;
  }

  // 화면 갱신
  document.getElementById("display").value = result;
  document.getElementById("result").textContent = "결과: " + result;

  // 기록 저장
  history.push({ firstNumber, operator, secondNumber, result });
  console.log(JSON.stringify(history, null, 2));

  // 다음 계산 대비 초기화
  currentInput = "";
  firstNumber  = null;
  operator     = null;
}

/* ----- C 버튼 ----- */
function clearInput(){
  currentInput = ""; firstNumber = null; operator = null; result = null;
  document.getElementById("display").value = "0";
  document.getElementById("result").textContent = "결과:";
}

/* ----- 에러 표시 ----- */
function showError(msg){
  document.getElementById("result").textContent = "에러: " + msg;
}
