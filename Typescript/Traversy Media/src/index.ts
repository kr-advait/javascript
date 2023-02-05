// TypeScript - (traversy media)


// Basic Types
let id: number = 5;

let company: string = 'Traversy Media';

let isPublished: boolean = true;

let x: any = 'Hello';
x = 12;

let age:number;
age = 30;

let ids: number[] = [1,2,3,4,5];

let arr: any[] = ['hello', 3.14, true, [1,2,3]];


// Tuple
let person: [number, string, boolean] = [1, 'Advait', true];

// Tuple Array
let employee: [number,string][];
employee = [
    [1, 'Advait'],
    [2, 'Parth'],
    [3, 'Karan'],
    [4, 'Meet'],
    [5, 'Manav']
];
console.log(employee);

// employee = [1, 'a']      ( will give error because it is of type [number, string] not [number, string][] )


// Unions
let productId: string | number = 22;
console.log(productId);
productId = "Value of productId can be string or number";
console.log(productId);


// Enum - enumerated types
enum Directions{
    Up,
    Down,
    Left,
    Right
}
console.log(Directions)

enum Directions2{
    Up = 2,         // initializer
    Down,           // 3
    Left,           // 4
    Right           // 5
}
console.log(Directions2)

enum Fruits{
    Apple = 'apple',
    Banana = 'banana',
    Pear = 'pear',
    Mango = 'mango'
}

console.log(Fruits.Apple)



// Objects
const user: {id: number, name: string} = {
    id : 0,
    name : 'John'
}

console.log(user);


// type aliases - (to make object types clear)
type User = {
    id: number,
    name: string
}

const user1: User = {
    id : 1,
    name : 'Robin'
}

console.log(user1);


// Type Assertion - {2 ways}    (1 - <number>variableName)      (2 - variableName as number)
let cid: any = 1;
let customerId = <number>cid;
// customerId = '2';            (will give error because type is changed from any to number)
console.log(customerId);
console.log(typeof customerId);

// or
let customerId2 = cid as number;
console.log(customerId);
console.log(typeof customerId);



// Functions

function addNum(x: number, y: number): number{
    return x + y;
}

console.log(addNum(2,3));




function log(msg: string | number): void{
    console.log(msg);
}

log(1);
log("hello guys");




// Interfaces - custom type (specific structure to object or function)
// alomst same as type aliases without '='     (type User = {})    -   (interface User {})
interface UserInterface {
    readonly id : number,       // can only be read
    name : string,
    age?: number        // (?:) optional key - will not give error if age is not present
}

let newUser: UserInterface = {
    id : 122,
    name : 'Robert'
}

type Point = number | string;   // can't do this with interface but type can work with primitves as well



// read only properties
newUser.id = 5;             // will give error because id in UserInterface is readonly




// Interface with function
interface MathFunc {
    (x: number, y: number): number
//  (func params: with types): func return type
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(2,33));
console.log(sub(33,2));


// classes
class Person {
    id: number,
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }
}

const advait = new Person(1, "advait");
const karan = new Person(2, "karan");

console.log(advait);
console.log(karan);


// Access modifiers / Data modifiers
interface laptopInterface {
    laptopName: string,
    private isChargable: boolean,
    protected isNew: boolean,           // needs getter / setter
    showInfo(): string
}


class Laptop implements laptopInterface {

    laptopName: string,
    private isChargable: boolean,            // should only be accessed from class
    protected isNew: boolean                 // should be accessed from this class or any class that inherits this class (children)

    constructor(laptopName: string, isChargable: boolean, isNew: boolean){
        this.laptopName = laptopName;
        this.isChargable = isChargable;
        this.isNew = isNew;
    }

    showInfo(){
        return `${this.laptopName} is chargable and not new laptop`;
    }

}



let advaitLaptop = new Laptop('Dell', true, false);
let parthLaptop = new Laptop('Macbook', true, false);

console.log(advaitLaptop.isChargable);              // private      (gives error)
console.log(advaitLaptop.isNew);                    // protected    (gives error)

console.log(advaitLaptop.showInfo());
console.log(parthLaptop.showInfo());



class laptopColor extends Laptop{
    color: string


    constructor(name: string, laptopName: string, isChargable: boolean, color: string){
        super(laptopName, isChargable);
        this.name = name;
        this.color = color;
        console.log(`Name-${this.name}, color-${this.color}, laptop-${laptopName}`)
    }
}

let advaitLaptopColor = new laptopColor('advait', 'dell',true,'black');
console.log("from sub class",advaitLaptopColor.showInfo());



// Generics - placeHolder for temporary type definition <T>
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3]);
let strArray = getArray<string>(['ad','af','fd']);

console.log(numArray);
console.log(strArray);