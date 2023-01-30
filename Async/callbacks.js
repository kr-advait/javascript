// Callback


function getTwoNumbesAndAdd(num1,num2, addNumbers){     // 1 (declare)
    console.log(num1,num2);
    addNumbers(num1,num2);      // 2 (call)
}

function add(num1,num2){        // 2 (declare)
    console.log(num1 + num2);
}

getTwoNumbesAndAdd(25,6,add);   // 1 (call)



// multiple setTimeout - changes the order and prints in 1,4,3,2 order
setTimeout(()=>{
    console.log("normal set timeout 1 after 1s");
}, 1000);
setTimeout(()=>{
    console.log("normal set timeout 2 after 3s");
}, 3000);
setTimeout(()=>{
    console.log("normal set timeout 3 after 2s");
}, 2000);
setTimeout(()=>{
    console.log("normal set timeout 4 after 1s");
}, 1000);



// callback hell - prints in same order 1,2,3

setTimeout(()=>{
    console.log("set timeout 1 callback hell after 1s");
    setTimeout(()=>{
        console.log("set timeout 2 callback hell after 3s");
        setTimeout(()=>{
            console.log("set timeout 3 callback hell after 2s");
        },2000);
    }, 3000);
}, 1000);






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

function changeText(element,text,color,timeInMs,onSuccess,onFailure){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        }
        else if(onFailure){
            onFailure();
        }
    },timeInMs);
}


// pyramid of doom

changeText(heading1,'one','tomato',1000,()=>{
    console.log('this is heading 1')
    changeText(heading2,'two','teal',1000,()=>{
        console.log('this is heading 2')
        changeText(heading3,'three','purple',1000,()=>{
            console.log('this is heading 3')
            changeText(heading4,'four','cyan',1000,()=>{
                console.log('this is heading 4')
                changeText(heading5,'five','red',1000,()=>{
                    console.log('this is heading 5')
                    changeText(heading6,'six','blue',1000,()=>{
                        console.log('this is heading 6')
                        changeText(heading7,'seven','brown',1000,()=>{
                            console.log('this is heading 7')
                            changeText(heading8,'eight','green',1000,()=>{
                                console.log('this is heading 8')
                                changeText(heading9,'nine','violet',1000,()=>{
                                    console.log('this is heading 9')
                                    changeText(heading10,'ten','orange',1000,()=>{
                                        console.log('this is heading 10')
                                    },()=>{console.log('heading 10 does not exist')})
                                },()=>{console.log('heading 9 does not exist')})
                            },()=>{console.log('heading 8 does not exist')})
                        },()=>{console.log('heading 7 does not exist')})
                    },()=>{console.log('heading 6 does not exist')})
                },()=>{console.log('heading 5 does not exist')})
            },()=>{console.log('heading 4 does not exist')})
        },()=>{console.log('heading 3 does not exist')})
    },()=>{console.log('heading 2 does not exist')})
},()=>{console.log('heading 1 does not exist')});