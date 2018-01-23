https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md

```javascript
{
   console.log( bar ); // ReferenceError!
   let bar = 2;
}

.................................................
for (let i=0; i<10; i++) {
	console.log( i );
}

console.log( i ); // ReferenceError

{
	let j;
	for (j=0; j<10; j++) {
		let i = j; // re-bound for each iteration!
		console.log( i );
	}

```


http://exploringjs.com/es6/ch_variables.html
### 9.5.1 for loop 


var-declaring a variable in the head of a for loop creates a single binding (storage space) for that variable:

```javascript
Problem :

const arr = [];
for (var i=0; i < 3; i++) {
    arr.push(() => i); pushing function in array 
}
arr.map(x => x()); // [3,3,3]
Every i in the bodies of the three arrow functions refers to the same binding, which is why they all return the same value.

Solution :
If you let-declare a variable, a new binding is created for each loop iteration:

const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i); // pushing function 
}
arr.map(x => x()); // [0,1,2] , map and call each function in array

```

This time, each i refers to the binding of one specific iteration and preserves the value that was current at that time. Therefore, each arrow function returns a different value.




