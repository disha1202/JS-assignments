// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   d. Remove duplicate values from the list.


let arr =   [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
 let newArr = arr.filter((x,y) => arr.indexOf(x) === y );
 console.log(newArr);