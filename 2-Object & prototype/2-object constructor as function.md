https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript

https://stackoverflow.com/questions/572897/how-does-javascript-prototype-work/23877420?stw=2#23877420


Functions are objects .


Every function has prototype property.

prototype is not available on the instances themselves (or other objects), but only on the constructor functions

However, __proto__ is available everywhere


............................................................\
```javascript
var fun = function(){}

This newly created function has both _proto_ and prototype property .

var res = {}.hasOwnProperty.call(fun, "prototype");
console.log(res) // true
res = {}.hasOwnProperty.call(fun, "__proto__");
console.log(res) // false

```


................................................................
```javascript
var res = new fun();
 res has no prototype property but it has _proto_
 
 res.__proto__ === fun.prototype // true , both points to same object
 

```

.................................................................................................................
```javascript
function a (name) {
  this.name = name;
 }
When JavaScript executes this code, it adds prototype property to a, prototype property is an 
object with two properties to it:

constructor
__proto__
So when we do

a.prototype it returns

     constructor: a()
    __proto__: Object
    
```


Now as you can see constructor is nothing but the function a itself and __proto__ points to 
the root level Object of JavaScript.

Let us see what happens when we use a function with new key word.

var b = new a ('JavaScript');
When JavaScript executes this code it does 4 things:

It creates a new object, an empty object // {}

It creates __proto__ on b and makes it point to a.prototype so b.__proto__ === a.prototype

It executes a.prototype.constructor (which is definition of function a ) with the newly created object 

(created in step#1) as its context (this), hence the name property passed as 'JavaScript' (which is added to this) 
gets added to newly created object.

It returns newly created object in (created in step#1) so var b gets assigned to newly created object.
Now if we add a.prototype.car = "BMW" and do  b.car, the output "BMW" appears.

this is because when JavaScript executed this code it searched for car property on b, 
it did not find then JavaScript used b.__proto__ (which was made to point to 'a.prototype' in step#2) 
and finds car property so return "BMW".

