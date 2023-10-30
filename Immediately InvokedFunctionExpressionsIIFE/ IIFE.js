// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // Named IIFE naam h iska yaha chai
  console.log(`DB CONNECTED`);
})();

// ; if not it give error bcoz context ni janta yeah

((name) => {
  // yahan naam nu=i h simple IIFE
  console.log(`DB CONNECTED To ${name}`);
})("Pradeep");
// paramter pass bhi kar skty
chai("Pradeep");
// ek file do IFFE liko Intervow rember this -->>>> ;
//  jaise website start ho waise database invoked ho jaye file ,global variables or objets avalable hain toh
// isue ho sakta hain ,,global scope se pullate ho jata hain no pollution i want imidate invoke ho jaye
