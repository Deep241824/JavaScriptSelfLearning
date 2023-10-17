// const ans = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// ans
//   .then(function () {
//     console.log("Resolved");
//   })
//   .catch(function () {
//     console.error("Rejected");
//   });
// result = new Promise((reslove, reject) => {
//   if (4) {
//     return reslove();
//   } else {
//     return reject();
//   }
// });
// result
//   .then(function () {
//     console.log("Value is 3. resolve hogya hain");
//   })
//   .catch(function () {
//     console.log("Value is 3. resolve hogya hain");
//   });
// Result = new Promise((resolve, reject) => {
//   return resolve(3);
// });
// Result.then(function () {
//   console.log("At Value 3 Par reslove hogya hain");
// }).catch(function () {
//   console.log("Rejected or Error");
// });

// const Rej = Promise.reject("Boo!");

// Rej.then(function () {
//   console.log("String B00! is Rejected");
// }).catch(function (error) {
//   console.log("String B00!' is Rejected with error :", error);
// });

// const itShouldResolve = true;
// const ans = new Promise((resolve, reject) => {
//   if (false) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// ans
//   .then(function () {
//     console.log("It should Resolved ");
//   })
//   .catch(function () {
//     console.error("It should Rejected");
//   });
function delayWithValue(value, delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

delayWithValue("Hello, World!", 2000).then((result) => {
  console.log(result);
});
