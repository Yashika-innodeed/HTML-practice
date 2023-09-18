//var

var uname = "John";
var age1 = 30;

function sayHello() {
  var message = "Hello, " + uname + "!";
  console.log(message);
}

sayHello();
console.log(uname); 
console.log(age1);  
//console.log(message);  Error: message is not defined


//let

let username = "John";
let age2 = 30;

if (true) {
  let username = "Jane"; 
  age2 = 25; 
  console.log(username); 
  console.log(age2);  
}

console.log(username); 
console.log(age2);  

//const

const PI = 3.14;
//PI = 3.1415;  Error: Assignment to constant variable

const person = {
  name: "John",
  age3: 30
};

person.age3 = 31; 

console.log(person); 
