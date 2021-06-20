// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())

let arr =   [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let newArr = [...new Set(arr)];
console.log(newArr);