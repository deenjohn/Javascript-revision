"use strict";
function updateProductId() {
  productId = 12;
}
let productId = null;

try {
  updateProductId();
} catch (e) {
  console.log("hi");
}
console.log(productId);
