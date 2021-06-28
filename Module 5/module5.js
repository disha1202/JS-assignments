let arr = [
    {
        "id":1,
        "name":"Amit Kumar",
        "age":25,
        "loginStatus" : true
    },
    {
        "id":2,
        "name":"Rahul Dixit",
        "age":20,
        "loginStatus" : false
    },
    {
        "id":3,
        "name":"Ravi Joshi",
        "age":55,
        "loginStatus" : true
    },
    {
        "id":4,
        "name":"Rohit Verma",
        "age":37,
        "loginStatus" : false
    },
    {
        "id":5,
        "name":"Ajay Jain",
        "age":17,
        "loginStatus" : true
    }
    

];
// To display the details(name and isLoggedIn) of a user who is currently logged-in using filter().

let arr1 = arr.filter(x => x.loginStatus=== true);
console.log(arr1);

// To display the name of the users who are currently logged-in using map().

let arr2 = arr.map(check);
function check(person){
    if(person.loginStatus===true)
    {
        return person;
    }
 return;

}

console.log(arr2);