// Provided following  array:
// [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another lists such that: 
// a. every element being twice of elements in the current list.
// b. every element being half of elements in the current list.

var arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];

// a. every element being twice of elements in the current list.
var arr_twice =[];
for(var i=0;i<arr.length;i++)
{
    arr_twice.push(arr[i]*2);
}

//b. every element being half of elements in the current list.
var arr_half = [];
for(var i=0;i<arr.length;i++)
{
    arr_half.push(arr[i]/2);
}

console.log(arr_twice, arr_half);
