var cloneUL = document.querySelector('ul').cloneNode();

console.log(cloneUL.toString()); //logs [object HTMLUListElement]
console.log(cloneUL.innerHTML); //logs (an empty string) as only the ul was cloned

cloneUL = document.querySelector('ul').cloneNode(true);

console.log(cloneUL.toString());
console.log(cloneUL.innerHTML);