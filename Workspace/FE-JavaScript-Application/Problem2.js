// 2번 문제

// 코드를 실행할 필요는 없습니다. 출력할 때에는 return 혹은 alert를 사용해주세요!

let lionMoney = {
  승인: 20000,
  영주: 8300,
  재혁: 2800,
  동재: 50000,
};

// arr[key]

let sum=0;

  for(let i in lionMoney) {
    sum+=lionMoney[i];
    
  };
  alert(sum);