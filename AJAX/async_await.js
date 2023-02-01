// Async Await

import * from './fetch.js';

const url = "https://jsonplaceholder.typicode.com/posts";

async function sendRequest(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

let temp;

sendRequest(url)
.then((data)=>{
    temp = data;
    console.log(temp,'before');  
});
// console.log(myData)

setTimeout(()=>{
    console.log(temp,'after');
}, 2000)