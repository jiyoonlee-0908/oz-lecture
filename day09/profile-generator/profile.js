// 이름 : 김태민
// 나이 : 33
// 직업 : 강사
// 취미 : 게임, 독서, 코딩
// 특이사항 :
// 1. 3살 토이푸들 김태구와 함께 살고 있음
// 2. OZ코딩스쿨 강의 진행중
// 3. 재택근무

let firstName = "Taem";
let lastName = "Kim";
let fullName = lastName + firstName;
const nameTemplate = `이름 : ${fullName} \n`;
console.log(nameTemplate);

let age = 33;
const ageTemplate = `나이 : ${age}`;
console.log(ageTemplate);

let jobs = ["태구보호자", "집경호원", "프로그래머", "강사"];
let job = jobs[3];
const jobTemplate = `직업 : ${job}`;
console.log(jobTemplate);

let hobbies = ["reading", "gaming", "coding"];
// let hobbiesString = hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2];
let hobbiesString = `${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`;
const hobbiesTemplate = `취미 : ${hobbiesString}`;
console.log(hobbiesTemplate);

let isStudent = false;
console.log("학생여부 :", isStudent);

const notes = {
  pet: "3살 토이푸들 김태구와 함께 살고 있음",
  ongoing: "OZ코딩스쿨 강의 진행중",
  isHome: "재택근무",
};
const notesTemplate = `\n\t특이사항 :
1. ${notes.pet}
2. ${notes.ongoing}
3. ${notes.isHome}
`;
console.log(notesTemplate);

const myPet = {
  name: "김태구",
  age: 3,
  species: "토이푸들",
};
console.log("name", typeof name);
console.log("age", typeof age);
console.log("hobbies", typeof hobbies);
console.log("isStudent", typeof isStudent);
console.log("notesTemplate", typeof notesTemplate);
console.log("myPet", typeof myPet);
console.log("myPet.name", typeof myPet.name);

//////////////////
console.log("////////////////");

var varNull = null;
var varUndefiend = undefined;
console.log("null == undefined", varNull == varUndefiend);
console.log("null === undefined", varNull === varUndefiend);

console.log("typeof null", typeof null);
console.log("typeof undefined", typeof undefined);

const myPet2 = {
  name: "김태구",
  age: 3,
  species: "토이푸들",
  likes: null,
};
console.log("myPet2.likes", myPet2.likes);

let nullArray = [null, 0, undefined];
console.log(nullArray);
console.log(nullArray[0]);
console.log(nullArray[1]);
console.log(nullArray[2]);
