//5번 문제

let user = {
  name: "예린",
  part: "FE",
};


let person = JSON.stringify(user);  // JSON 문자열로 변환
console.log(person); 

let FE_person = JSON.parse(person);  // Javascript 객체로 변환 후 다른 변수로 저장
console.log(FE_person);
