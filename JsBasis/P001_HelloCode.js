 let x=100;
console.log("x");
console.log("Hello Everyone");
console.log("Welcome to javascript");
let id = 101;
let name ="Rashmi";
console.log("******Number Type*****");
let num1 = 100;
let num2 = -90;
let num3 = 9.9;
num3 = "10.26589789";
console.log("This is num1: " +num1);
console.log(num2);
console.log(num3);
console.log(typeof num3); //Boolean
let fname= `Shivani`;
console.log("First name is : " +fname);
let location = 'bangalore';
console.log("Current Location is : " +location);
let emailID = 'rashmiranjan1000@gmail.com';
console.log("email ID is" +emailID);

let ch='P';
console.log(typeof ch);

let profile = "My name is Priyanka and my experience and certified tester!";
console.log(profile);
let user ={};
console.log(user);
console.log(typeof user);
//Array []
let userID=[10,20,30];
console.log(userID);
console.log(typeof userID);
let person = {
    id:101,
    name:"String"
};
console.log(person);
console.log(person.id);
console.log(person["name"]);
person.address="Pune";
console.log(person);
person.wealth="America";
console.log(person);
delete person.address;
console.log(person);
let profile1= Symbol("QA");
console.log(profile1);
console.log(typeof profile1);
let product ={
    product1: "macbook",
    product2: "Lenevo",
    product3: "Asus"
}
console.log(product);
let pid=Symbol;
delete product.price;
console.log(product);
const venderName = "Microsoft";
venderName = "Apex"
console.log(vendorName);
var f1name= "Hiteshi";
let lo2cation= "US";
const em1ailID= "hiteshi@gmail.com";
function show(){
    console.log("firstName");
}
show();
console.log("-------Functional Type---------");
function info(){
    var automationType="Functional";
    let browserVersion="150";
    const browserName="Chrome";
    console.log("Var Type is :" ,automationType);
    console.log("let Type is :",browserVersion);
    console.log("const Type is :",browserName);

}
info();

var a=10;
console.log(a);
function test1(){
 var a=20;
 console.log(a);
 if(true){
    var a=30;
    console.log(a);
 }
 console.log(a);
}
test1();



if(true)
{
    let testType = "API";
    const tool = "Postman";
    console.log(testType);
    console.log(tool);
} 

let b=20;
console.log(b);
function test2(){
    let b=30;
    console.log(b);
    if(true){
        let b=10;
        console.log(b);
    }
    console.log(b);

}
test2();

console.log(x);
var x=100;
console.log(x);

let y =100;
console.log(y);

console.log(z);
let z=100;

let x = 100;
console.log("This is num1:" ,x);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

let num4 = 9007199254740991;
num4=num4+1;
console.log(num4);
console.log(typeof num4);

let isActive =true;
console.log("Participants are active ?" +isActive);
console.log(typeof isActive);

console.log("------String-----");
/*
String is primitive data type. It is collection of characters.
In JS there is no type of char; so everything is string.
*/

/*
Way to declare string
1. Single Quote = 'Hello';
2. Double Quote = "Hello";
3. Back Tick = `Hello`;
*/

let fName = 'Hello';
let fName1 = "Hello"
console.log(fName);
console.log(fName1);


//Tempelate String
let emailId = `rashmi.behuria@gmail.com`;
console.log("The email ID is:" ,emailId);
console.log(typeof emailId);

let ch ='P';
console.log(ch);
console.log(typeof ch);

let profile = `My name is Rashmi having 8 years of experience. 
I am ISTQB certified tester and conducting automation string`;
console.log(profile);

let currentYear =2026;
let requestPayload = `{
{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${currentYear},
    "price": 2049.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
    "color": "silver"
  }
}
}`;

console.log(requestPayload);
console.log(typeof requestPayload);

let stdName = null;
console.log(typeof stdName);
console.log(stdName);









