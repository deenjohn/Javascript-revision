```javascript


1)

var a = 2;

(function IIFE(){

	var a = 3;
	console.log( a ); // 3

})();

console.log( a ); // 2


.................................................................................
2)
passing global variable  to function expression
var a = 2;

(function IIFE( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

})( window );

console.log( a ); // 2

..........................................

3)pattern is used in the UMD (Universal Module Definition) 

var a = 2;

(function IIFE( def ){
	def( window );
})(function def( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

});



```
