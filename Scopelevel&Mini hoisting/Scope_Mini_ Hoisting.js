function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  // Parent ko child kar sakta hain call website is child of username but two not

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
