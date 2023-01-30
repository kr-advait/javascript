// promises

const fruits = ['apple','banana','chikoo','pear','avocado','watermelon'];

const fruitDish = new Promise((resolve,reject)=>{
    if(!fruits.includes('apple')){
        resolve("fruit is present");
    }
    else{
        // reject("fruit is not present");
        throw new Error("not present");
    }
});

fruitDish.then(
    (value)=>{console.log(`${value} 1`);},
    (error)=>{console.log(error);}
);

// or

fruitDish
.then((value)=>{
    console.log(`[${value}] 2 before return in 1st .then()`);
    return value+' new';
})
.then((value)=>{
    console.log(`[${value}] 2 after return in 2nd .then()`);
})
.catch((error)=>{
    console.log(error);
})