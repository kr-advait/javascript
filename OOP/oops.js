// class 

class User{
    constructor(){
        console.log("Constructor will always run by default when any object is created.");
        // this.name = name;
        // console.log(this.name);
    }

    get name(){
        // this.#sayHi();
        return this._name;
    }
    
    set name(newName){
        this._name = newName;
    }

    publicMethod(){
        console.log("This is public method");
    }
    
    // private method accessed by public method 
    #privateMethod(){
        console.log("This is private method");
    }

    publicMethodToAccessPrivateMethod(){
        return this.#privateMethod();
    }
    // #sayHi();
}

let user = new User();
user.name = "Adi";       // setter
console.log(user.name);     // getter
user.new = "hello";
user.publicMethodToAccessPrivateMethod();
user.publicMethod();

console.log(user)




// call, apply, bind

function giveInfo(laptop,technology,funcName){
    return(`${funcName} - Hello, ${this.name}. Your age is ${this.age}. You have ${laptop} laptop and working on ${technology}.`);
}

const userAdvait = {
    name : "advait",
    age : 20
}

const userKaran = {
    name : "karan",
    age : 21
}



// call  -   functionName.call(objectName,param1,param2,....)

let advaitInfo = giveInfo.call(userAdvait,"Dell","Backend","Call");
console.log(advaitInfo);

let karanInfo = giveInfo.call(userKaran,"Dell","Frontend","Call");
console.log(karanInfo);




// apply    -   functionName.apply(objectName,[param1,param2,....])

let advaitInfo2 = giveInfo.apply(userAdvait,["Dell","Backend","Apply"]);
console.log(advaitInfo2);

let karanInfo2 = giveInfo.apply(userKaran,["Dell","Frontend","Apply"]);
console.log(karanInfo2);




// bind    -   functionName.bind(objectName,param1,param2,....)

let showAdvaitInfo = giveInfo.bind(userAdvait,"Dell","Backend","Bind");
console.log(showAdvaitInfo());

let showKaranInfo = giveInfo.bind(userKaran);
console.log(showKaranInfo("Dell","Frontend","Bind"));