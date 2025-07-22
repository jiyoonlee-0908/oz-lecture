let score = Number(prompt("Enter your score (0-100):"));
const maxScore = 100;
var percentage = (score / maxScore) * 100;

score += 5; // Bonus points
let grade;

if (score >= 90 && score <= 100) {
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

let passStatus = score >= 60 ? "Pass" : "Fail";

console.log("Score: " + score);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);
console.log("Status: " + passStatus);

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Fair.");
    break;
  case "D":
    console.log("Needs improvement.");
    break;
  default:
    console.log("Try harder!");
}
