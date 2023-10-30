// In JavaScript, the "this" keyword refers to the context in which a function is executed. Its value can change depending on how a function is called. There are several ways that "this" can be determined:

// Global Context: If a function is called in the global scope (outside of any object or function), "this" refers to the global object. In a browser, the global object is typically "window."

// Method Invocation: When a function is called as a method of an object, "this" refers to the object that contains the method.

// Constructor Functions: When a function is used as a constructor to create new objects, "this" refers to the newly created object.

// Explicit Binding: You can explicitly set the value of "this" using methods like call(), apply(), or bind(). This allows you to control what "this" refers to.

// Arrow Functions: Arrow functions do not have their own "this" context. Instead, they inherit the "this" value from their surrounding (lexical) context.

// It's important to understand these rules because the value of "this" can often lead to unexpected behavior if you're not aware of the context in which a function is called. Interviewers might ask follow-up questions or give you code examples to test your understanding of how "this" works in various scenarios.

// const user = {
//   username: "hitesh",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to the website`);
//     // console.log(this);
//   },
// };

// user.welcomeMessage(); // Output: "hitesh, welcome to the website"

// user.username = "Pradeep";
// user.welcomeMessage(); // Output: "Pradeep, welcome to the website"
// console.log(this);
// global k ander context hi ni h isliye emapty console.log(this);  output {} object
// console.log(this)

// Window {0: Window, 1: Window, 2: Window, 3: Window, 4: global, window: Window, self: Window, document: document, name: '', location: Location, …}

// why empty {} in node and console--window object show why ++ js ko excute ek tarika tha console k ander...engine k ander abi bhar nikala node dni band naya standalone hain global window object haintabi wndow k sarey event click kar paty hain jo bhi dom ho use hoga

// this () yaha current context kiya hain..???

// const test = {
//     prop: 42,
//     func: function () {
//       return this.prop;
//     },
//   };

//   console.log(test.func());
// Expected output: 42
//   function getThis() {
//     return this;
//   }

//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };

//   obj1.getThis = getThis;
//   obj2.getThis = getThis;

//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// By +++++++++++++++++++++++++++++++Hitesh+++++++++++++++++++++++++++

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this.username);
// };
// // jab fuction this ko print kart hain---bahuyt valur aati hain this k ander kuch u can acessconsole.log(this.username);
// // dekh ly function ka ander ni kar raha hain
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// consle m as global context m and node enviourment main emapt {} m work karta hain

// regular main this use larsakty hain Arrow m ni kar sakty kyu+++++++ open eneded question

// Arrow samjne k liye this smajna padedega.or this k liye object m jana padega

// Syntax: Arrow functions have a shorter syntax compared to traditional function expressions. They are defined using the => (fat arrow) syntax. For example:

// javascript
// Copy code
// // Traditional function expression
// const add = function(a, b) {
//   return a + b;
// };

// // Arrow function
// const add = (a, b) => a + b;
// Lexical this binding: Arrow functions do not have their own this context. Instead, they inherit the this value from their surrounding (lexical) context. This behavior can be useful when working with functions inside objects or in event handlers.

// javascript
// Copy code
// const person = {
//   firstName: "John",
//   sayHello: function() {
//     setTimeout(() => {
//       console.log(`Hello, ${this.firstName}`);
//     }, 1000);
//   },
// };

// person.sayHello(); // Output: "Hello, John"
// No arguments object: Arrow functions do not have their own arguments object. If you need to access function arguments, you should use rest parameters or regular functions.

// javascript
// Copy code
// const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
// No binding of this, super, and new.target: Arrow functions cannot be used as constructors with new, and they don't have access to super or new.target.

// When explaining arrow functions to an interviewer, it's important to emphasize their use cases and advantages, such as conciseness and the behavior of the this keyword. You should also be aware of their limitations, like not having their own this context, which can be an advantage or a disadvantage depending on the specific use case.

// const addTwo = (num1, num2) =>   num1 + num2
// {}explixty  retun likhna he hoga but () no retrun
//
const addTwo = (num1, num2) => num1 + num2;

//  implicit retrun main maan liya aap onle line code hain return ki need ni hain
