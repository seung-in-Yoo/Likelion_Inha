// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

let newarr = arr.filter(arr => arr.part === "fe");
console.log(newarr);

let newarr2 = newarr.sort((a,b)=>b.age-a.age);
console.log(newarr2);

const final_arr = newarr2.map(function(item) {
    return {...item,part:item.part.toUpperCase()};
});

console.log(final_arr);