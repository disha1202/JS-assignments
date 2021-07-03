let arr = [
    {
        "id":1,
        "name":"Amit Kumar",
        "age":25,
        "isLoggedIn" : true
    },
    {
        "id":2,
        "name":"Rahul Dixit",
        "age":20,
        "isLoggedIn" : false
    },
    {
        "id":3,
        "name":"Ravi Joshi",
        "age":55,
        "isLoggedIn" : true
    },
    {
        "id":4,
        "name":"Rohit Verma",
        "age":37,
        "isLoggedIn" : false
    },
    {
        "id":5,
        "name":"Ajay Jain",
        "age":17,
        "isLoggedIn" : true
    }
    

];
// To display the details(name and isLoggedIn) of a user who is currently logged-in using filter().

let arr1 = arr.filter(x => x.isLoggedIn=== true);
console.log(arr1);

// To display the name of the users who are currently logged-in using map().

let arr2 = arr.map(check);
function check(person){
    if(person.isLoggedIn===true)
    {
        return person;
    }
 return;

}

console.log(arr2);
