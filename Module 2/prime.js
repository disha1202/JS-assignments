// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]


let arr =  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

//   b. Print “List is full of prime no” if every element is prime
let prime = arr.every((x)=>{
    let count =0;
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
            count ++; 
        }
    }
    if(count==0)
    {
        return true;
    }
    else{
        return false;
    }
   
});
if(prime){
    console.log("list is full of prime numbers");
}

//   c. Print “List has a prime no” if there is a prime no in it
let prime1 = arr.some((x)=>{
    let count =0;
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
           return true;
        }
    }
   return false;
   
});
if(prime1){
    console.log("list has a prime number");
}
