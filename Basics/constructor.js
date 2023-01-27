// Constructor

function User(name){
    // this = {};               (implicitly)
    this.name = name;
    this.isAdmin = false;
    // return this;             (implicitly)
}

// this -> points to current object
// User is a constructor and object can be created using new keyword
let user = new User("Advait");

console.log(user)

console.log(typeof user);           // object