// AJAX


// xhr - XML http request

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

console.log(xhr.readyState, "- xhr.open() has not been called yet");

xhr.open("GET",url);

console.log(xhr.readyState, "- xhr.open() has been called");

xhr.onreadystatechange = function(){
    switch(xhr.readyState){
        case 2 :
            console.log(xhr.readyState, "- xhr.send() has been called");
            break;
        case 3 :
            console.log(xhr.readyState, "- Downloading data, responseText is partial data yet");
            break;
        case 4 :
            console.log(xhr.readyState, "- Operation complete");
            break;
    }

    if(xhr.readyState == 4){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log("data from xhr.onreadystatechange");
        console.log(data);
    }
    
}

xhr.onload = ()=>{
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log("data from xhr.onload");
    console.log(data);
}

xhr.send();


function sendRequest(method,url){
    console.log(`method - ${method}, url - ${url}`)

    return new Promise((resolve,reject)=>{
        const xhr2 = new XMLHttpRequest();
        xhr2.open(method,url);
        xhr2.onload = ()=>{
            if(xhr2.status >= 200 && xhr2.status<300){
                resolve(xhr2.response);
            }
            else{
                reject(new Error("response not found"));
            }
        }
        xhr2.onerror = ()=>{
            reject(new Error("response not found"));
        }
        xhr2.send();
    })
}


sendRequest("GET",url)
.then((response)=>{
    return JSON.parse(response);
})
.then((data)=>{
    console.log("data from promise");
    console.log(data);
    return data[3].id;
})
.then((id)=>{
    console.log(id);
    return sendRequest("GET", url + `/${id}`);
})
.then((response)=>{
    return JSON.parse(response);
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})