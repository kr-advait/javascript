// Maps

// Object - allows keys like strings & number only.
// Map - allow keys of any type.


let map = new Map();

// Set property
map.set('1','hello');
map.set(2,'world');
map.set('2', 'this key is different from key above');

// Get property
console.log(map.get(2));            // world
console.log(map.get('2'));          // this key is different from key above

console.log(map.size);              // 3    (3 properties are defined currently)


// Has property
console.log(map.has('1'));          // true
console.log(map.has(1));          // false


// Delete property
map.delete('2');
console.log(map);

// clear - clears everything from map
map.clear();
console.log(map);

map.set(1,"one")
.set(2,"two")
.set(3,"three");

console.log(map);

// Iterating a map
// [key,value]
for(let pairs of map){
    console.log(pairs);
}
// or
// Array of keys
for(let i of map.keys()){
    console.log(i);
}
// or
// Array of values
for(let i of map.values()){
    console.log(i);
}
// or
map.forEach((value, key)=>{
    console.log(`${key} : ${value}`);
})


// create map from objects entries - (Object.entries(obj))
let myObject = {
    name : 'John',
    age : 35
}

let myMap = new Map(Object.entries(myObject));
console.log(myObject);
console.log(myMap);


// create object from map - (Object.fromEntries(map))
let newObject = Object.fromEntries(myMap);
console.log(newObject);