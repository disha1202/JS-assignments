// 5. Provided following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find sum, min and max
 
var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];


var sum =0, min =arr[0], max =arr[0];

for(var i =0;i<arr.length;i++)
{
    //Sum
    sum += arr[i];
    //Maximum
    if(arr[i]>max)
    {
        max = arr[i];
    }
    //Minimum
    if(arr[i]<min)
    {
        min = arr[i];
    }
}

console.log("Sum : " + sum + "\n" + "Maximum : " +max + "\n" + "Minimum : " +min);