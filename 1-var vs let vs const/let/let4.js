"use strict";

function updateProductId() {
  productId = 12;
}

try {
  updateProductId();
} catch (e) {
  console.log("error");
}
let productId = null;
updateProductId();
console.log(productId);
