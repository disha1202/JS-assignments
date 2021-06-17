// Provided following  array:
// [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
// d. Remove duplicate values from the list ()

var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

var newArr =[];
for(var i=0;i<arr.length;i++)
{
    if(!newArr.includes(arr[i]))
    {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

