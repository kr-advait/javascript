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


