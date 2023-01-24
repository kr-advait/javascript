// 1 - Strings

let myStr = "This is my string";
let myStr2 = 'This is my second string';

console.log(myStr);
console.log(myStr2);

let both = `${myStr} + ${myStr2} + \"both concatenated\" 
this will be printed in new line beacause of backticks`;
console.log(both);

let str = "hello";

let strLen = str.length;
console.log(strLen);

// String methods
console.log("Slice - ",str.slice(1,3));
console.log("Replace - ",str.replace('lo','p'));
console.log("Search",str.search('e'));
str = "   hello";
console.log("Trim - ",str.trim());









// 2 - Arrays
let a = [1,2,3,4,5];

a.push(45);
console.log(a);

a.pop();
console.log(a);

a.reverse();
console.log(a);

a.sort();
console.log(a);

console.log(a.indexOf(2));

console.log(a.length);

a = a.map((a)=>a+1);
console.log(a);

a = a.filter((a)=>a%2==0);
console.log(a);

a = [1,2,3]
a = a.reduce((a,b)=>a+b);
console.log(a);

a = [1,2,3,4,5]
a.shift();
console.log(a);

a.unshift(1);
console.log(a);






// Objects
let obj1 = {
    cars : ['Ferrari','Audi','Lamborghini','Porsche'],
    str : "This is cars object",
    num : 1
};

let obj2 = {
    fruits : ["Apple","Mango","Banana","Pear"],
    str : "This is fruits object",
    num : 2
}

obj1.new = "new property";
delete obj1.new;

let obj = {...obj1, ...obj2};
let {cars:myCars, str:myNewStr} = obj1;
console.log(myCars);
console.log(myNewStr);

let {cars:one,str:two,num:three} = obj1;
console.log(one);
console.log(two);
console.log(three)

console.log(obj1)
console.log(obj2)

console.log(obj)

console.log(Object.keys(obj1));
console.log(Object.values(obj2));




// Loops
// for
for(let i=0;i<5;i++){
    console.log(i);
}

// while
i=0;
while(i<5){
    console.log(i);
    i++;
}

// for-of
let nums = [1,2,3,4,5];
for(let i of nums){
    console.log(i)
}

// for-in
for(let i in nums){
    console.log(i)
    console.log(nums[i])
}

