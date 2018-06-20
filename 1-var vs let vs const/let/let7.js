"use strict";
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
  updateFunctions.push(function() {
    return i;
  });
}
console.log(updateFunctions[0]());

let updateFunctions2 = [];
for (let i = 0; i < 2; i++) {
  updateFunctions2.push(function() {
    return i;
  });
}
console.log(updateFunctions2[0]());
