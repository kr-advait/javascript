// promises

const fruits = ['apple','banana','chikoo','pear','avocado','watermelon'];

const fruitDish = new Promise((resolve,reject)=>{
    if(fruits.includes('apple')){
        resolve("[fruit is present]");
    }
    else{
        reject("fruit is not present");
        // throw new Error("not present");
    }
});

fruitDish.then(
    (value)=>{console.log(`${value} - 1st deg 1st prom`);},
    (error)=>{console.log(error);}
);
    
    // or
    
fruitDish
.then((value)=>{
    console.log(`${value} - 1st deg 2nd prom`);
    return value;
})
.then((value)=>{
    console.log(`${value} - 2nd deg 2nd prom`);
    return value;
})
.then((value)=>{
    console.log(`${value} - 3rd deg 2nd prom`);
})
.catch((error)=>{
    console.log(error);
})


// function returning promise

function checkFruit(){
    const fruits = ['apple','banana','chikoo','pear','avocado','watermelon'];
    
    return new Promise((resolve,reject)=>{
        if(fruits.includes('apple')){
            resolve("[fruit is present]");
        }
        else{
            reject("fruit is not present");
        }
    });
    
}


checkFruit()
.then((value)=>{
    console.log(`${value} - 1st deg 3rd prom`);
    return value;
})
.then((value)=>{
    console.log(value,"- 2nd deg 3rd prom");
})
.catch((error)=>{
    console.log(error);
})






// promise resolve

const newPromise = Promise.resolve(5);

newPromise
.then((value)=>{
    console.log(value);
});




const heading1 = document.getElementById('heading1');
const heading2 = document.getElementById('heading2');
const heading3 = document.getElementById('heading3');
const heading4 = document.getElementById('heading4');
const heading5 = document.getElementById('heading5');
const heading6 = document.getElementById('heading6');
const heading7 = document.getElementById('heading7');
const heading8 = document.getElementById('heading8');
const heading9 = document.getElementById('heading9');
const heading10 = document.getElementById('heading10');


function changeText(element,text,color,timeInMs){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                let originalText = element.textContent;
                element.textContent = text;
                element.style.color = color;
                console.log(`resolved for ${originalText}`);
               resolve(`${originalText} is now ${text} and it's color is ${color}`);
            }
            else{
                reject("promise rejected");
            }
        },timeInMs);
    })
}


// promise chain 

changeText(heading1,'one','tomato',1000)
.then((value)=>{
    console.log(value)
    return changeText(heading2,'two','teal',1000);
})
.then((value)=>{
    console.log(value)
    return changeText(heading3,'three','purple',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading4,'four','cyan',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading5,'five','red',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading6,'six','blue',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading7,'seven','brown',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading8,'eight','green',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading9,'nine','violet',1000);
})
.then((value)=>{
    console.log(value);
    return changeText(heading10,'ten','orange',1000);
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})