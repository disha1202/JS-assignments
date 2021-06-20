// 4. Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.


let arr =  [0, 2, 4, 6, 8, 10, 12, 14, 16];

//Twice
let arr_twice = arr.map(x => x*2);
console.log(arr_twice);

//Half
let arr_half = arr.map(x => x/2);
console.log(arr_half);