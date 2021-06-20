// 3. Provided the following  array:
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    Filter out odd, even, and prime numbers and print them

let arr =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Even
let even = arr.filter(x => x%2===0);
console.log(even);
//Odd
let odd = arr.filter(y => y%2 !==0);
console.log(odd);
//Prime
let prime = arr.filter(function(z){
    let count =0;
    for(let i=2;i<z;i++)
    {
        if(z%i===0)
        {
            count++;
        }
    }
    if(count===0)
    {
        return true;
    }
});