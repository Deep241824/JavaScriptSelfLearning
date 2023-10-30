Array.prototype.customSplice = function (start, deleteCount, ...items) {
  const arrayCopy = [...this];
  const deletedElements = arrayCopy.splice(start, deleteCount, ...items);
  this.length = 0;
  this.push(...arrayCopy);
  return deletedElements;
};

const myArray = [99, 101, 232, 11, 4];
const deleted = myArray.customSplice(1, 2, "Pradeep", "Harman", "Preet");
console.log(myArray);
console.log(deleted);
