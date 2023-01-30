// Asynchronous



// code below is synchronous by deefault

console.log("start");

for(let i=0;i<5;i++){
    console.log(i);
}

console.log("end");




// setTimeout - asynchronous by default (provided by browser)

console.log("setTimeout for hello() start");

function hello(){
    console.log("Hello sir");
}

setTimeout(hello, 1000);    // 1000 ms (millisecond) = 1 second

console.log("setTimeout for hello() end");



// clearTimeout - cancels execution of setTimeout

console.log("setTimeout start");

const id = setTimeout(()=>{
    console.log("inside setTimeout");
});

console.log(`setTimeout id : ${id}`);

clearTimeout(id);
console.log(`Cleared setTimeout having id : ${id}`);

console.log("setTimeout end");