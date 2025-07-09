let inputStr = prompt("점수를 입력하세요.");
console.log("입력값(문자열):", inputStr);

// 문자열을 숫자로 변환
let input = parseInt(inputStr);
console.log("입력값(숫자):", input);

// 유효성 검사: 숫자가 아니거나 범위가 이상하면 경고 후 종료
if (isNaN(input) || input < 0 || input > 100) {
  console.log("⚠️ 유효한 숫자(0~100)를 입력하세요.");
} else {
  const MAX_SCORE = 105;
  let score = input;
  var grade;

  // 최종 점수 계산 (5점 보너스, 최대 105 제한)
  score += 5;
  if (score > MAX_SCORE) score = MAX_SCORE;
  console.log("Final Score:", score);

  // 등급 결정
  if (score >= 100) {
    grade = "S";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log("Grade:", grade);

  // 합격/불합격
  let status = score >= 60 ? "Pass" : "Fail";
  console.log("Status:", status);

  // 메시지
  let message = "";
  switch (grade) {
    case "S":
      message = "Super!!";
      break;
    case "A":
      message = "Excellent work!";
      break;
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "Satisfactory performance.";
      break;
    case "D":
      message = "Needs improvement.";
      break;
    case "F":
      message = "Please try harder!";
      break;
    default:
      message = "Invalid grade.";
  }
  console.log("Message:", message);
}
