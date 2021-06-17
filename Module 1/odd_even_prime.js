// Provided following  array:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even and prime numbers and print them
var even =[];
var odd= [];
var prime=[];
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
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2 == 0)
    {
        even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
    if(isPrime(arr[i]))
    {
        prime.push(arr[i]);
    }
}

console.log("even "+even +"\n","Odd "+odd+"\n","Prime "+prime);
