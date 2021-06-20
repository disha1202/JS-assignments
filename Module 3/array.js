// 1. Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]

let arr = [
    {
        "id":1,
        "name":"Amit Kumar",
        "age":25
    },
    {
        "id":2,
        "name":"Rahul Dixit",
        "age":20
    },
    {
        "id":3,
        "name":"Ravi Joshi",
        "age":55
    },
    {
        "id":4,
        "name":"Rohit Verma",
        "age":37
    },
    {
        "id":5,
        "name":"Ajay Jain",
        "age":17
    }
    

];

//   a. Print id and name of the youngest and oldest person

let youngest = arr.reduce((x,y)=> Math.min(x,y.age), arr[0].age);
console.log(youngest);

let oldest = arr.reduce((x,y)=> Math.max(x,y.age), arr[0].age);
console.log(oldest);

//   b. Create another list having id and name of all the person above 18 years

let above_18 = arr.filter(x => x.age > 18);
above_18.forEach(x => delete x.age);
console.log(above_18);

//   c. Find the average age

let sumOfAges = arr.reduce((x,y) => x += y.age, arr[0].age);
let avg_age = sumOfAges/arr.length;
console.log(avg_age);

//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively

let arr1 = arr.filter(x => x.name[0]==="A");
console.log(arr1);

let arr2 = arr.filter(x => x.name[0]==="R");
console.log(arr2);

