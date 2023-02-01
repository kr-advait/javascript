// fetch

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then((response)=>{
    // console.log(response)
    return response.json();            // .json() returns promise
})
.then((data)=>{
    console.log(data);              // contains original data that we want
})




// post request

fetch(url,{
    method : "POST",
    body : JSON.stringify({
        title : 'foo',
        body : 'bar',
        id : 101
    }),
    headers : {
        'Content-type' : 'application/json'
    }
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})

