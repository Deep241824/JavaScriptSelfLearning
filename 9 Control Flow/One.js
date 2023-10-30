// if
const isUserloggedIn = true;
const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

// +++++++++++++++++++++++++++++++++++++++++++

// Default (GPT-3.5)

// User
// == and === diffrence in javascript
// ChatGPT
// In JavaScript, == and === are two different comparison operators used to compare values. They have distinct behaviors:

// == (Equality Operator):

// The == operator is used for loose equality comparison. It checks if the values on both sides are equal after type coercion. Type coercion means that JavaScript will try to convert one or both values to a common data type before making the comparison.
// Example:

// javascript
// Copy code
// 5 == "5" // true
// In this case, JavaScript converts the string "5" to a number and then checks if both values are equal.

// However, == can sometimes produce unexpected results due to type coercion, so it's generally recommended to avoid it.

// === (Strict Equality Operator):

// The === operator is used for strict equality comparison. It checks if the values on both sides are not only equal but also have the same data type. No type coercion is performed in this case.
// Example:

// javascript
// Copy code
// 5 === "5" // false
// In this case, the comparison returns false because the values are of different data types.

// Using === is generally considered good practice because it avoids unexpected type coercion issues, making your code more predictable and less error-prone. It's often referred to as "strict equality."

// To sum up:

// == performs loose equality comparison with type coercion.
// === performs strict equality comparison without type coercion.
// In most cases, it's recommended to use === for comparisons, as it helps prevent subtle bugs and makes your code more reliable
