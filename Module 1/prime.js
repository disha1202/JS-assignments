// 5. Provided following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]



var arr =  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

//b. Print “List is full of prime no” if every element is prime
function isPrime(n){
    var count =0;
    for(var i =2;i<n-1;i++)
    {
        if(n%i==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        return true;
    }
    else{
        return false;
    }
}

var x = 0;

for(var i =0;i<arr.length;i++)
{
    if(isPrime(arr[i]))
    {
          x++;
    }
}

if(x == arr.length)
{
    console.log("List is full of prime no");
}

// c. Print “List has a prime no” if there is a prime no in it
if(x>0)
{
    console.log("List has a prime no");
}
