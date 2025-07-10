// 최대 별 개수 설정 (const 사용 예시)
const maxStars = 10;

// 사용자 입력을 받을 변수 (let 사용 예시)
let input;

// 별 문자열을 담을 변수 (var 사용 예시)
var stars;

// 별을 출력하는 함수 선언문 (기본값 설정 포함)
function printStars(count = 1) {
  var result = '';
  for (let i = 0; i < count; i++) {
    result += '*';
  }
  console.log(result);
}

// 입력을 받을 반복문 (do while로 유효 입력까지 반복)
do {
  input = prompt(`Enter the number of stars (1-${maxStars}):`);
  let num = Number(input); // 문자열을 숫자로 변환

  // 유효성 검사: 숫자가 아니거나 범위를 벗어난 경우
  if (isNaN(num) || num < 1 || num > maxStars) {
    console.log(`[입력: ${input}] Invalid input! Enter a number between 1 and ${maxStars}.`);
    continue; // 다음 루프로 넘어감
  }

  // 유효한 입력이면 별 출력 후 종료
  printStars(num);
  break; // 반복 종료

} while (true);
