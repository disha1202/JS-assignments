// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max


let arr =  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
//Sum
let sum = arr.reduce((x,y)=>x+y);
console.log(sum);
//Max
let max = arr.reduce((x,y)=>x=Math.max(x,y));
console.log(max);
//Min
let min = arr.reduce((x,y)=>x=Math.min(x,y));
console.log(min);
