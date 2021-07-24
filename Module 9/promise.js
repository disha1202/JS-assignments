let promise = new Promise(function(resolve,reject){
    const x = 1;
    if(x== 1){
        resolve("promise resolved");
    }
    else {
        reject("promise rejected");
    }
});

promise.then(value=>{
    alert(value);
}).catch(value=>{ alert(value)});