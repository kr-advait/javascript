// Sets - unique values
// [1,1,1,1,2,2,2,3,3,4,4,4,5,5,5] -> [1,2,3,4,5]

let set = new Set();

// Add to set
set.add(1);
set.add(12);
set.add(1);
set.add(122);
set.add(21);
set.add(21);
set.add(12);
set.add(12);
set.add(122);
set.add(122);

// delete from set
set.add(5);
console.log(set.has(5));        // true

set.delete(5);
console.log(set.has(5));        // false

console.log(set.size);          // 4


// iterate set
for (let i of set){
    console.log('for-of',i);
}
// or
set.forEach((item)=>{
    console.log('forEach',item);
})

// clear - clears everything from set
set.clear();
console.log(set);