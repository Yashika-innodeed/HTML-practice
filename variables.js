//var

var uname = "John";
var age1 = 30;

function sayHello() {
  var message = "Hello, " + uname + "!";
  console.log(message);
}

sayHello();
console.log(uname); // Output: John
console.log(age1);  // Output: 30
//console.log(message);  Error: message is not defined


//let

let username = "John";
let age2 = 30;

if (true) {
  let username = "Jane"; // This 'name' variable is different from the one above
  age2 = 25; // This modifies the outer 'age' variable
  console.log(username); // Output: Jane
  console.log(age2);  // Output: 25
}

console.log(username); // Output: John
console.log(age2);  // Output: 25 (modified inside the block)

//const

const PI = 3.14;
//PI = 3.1415;  Error: Assignment to constant variable

const person = {
  name: "John",
  age3: 30
};

person.age3 = 31; // This is allowed, as it's modifying a property, not reassigning the variable

console.log(person); // Output: { name: "John", age: 31 }
