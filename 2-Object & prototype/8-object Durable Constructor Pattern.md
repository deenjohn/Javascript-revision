
objects that have no public properties and whose methods don’t reference the this object. 

A durable constructor is a constructor that follows a pattern
similar to the parasitic constructor pattern, 
with two differences: instance methods on the created

object don’t refer to this, and the constructor is never called using the new operator. 

function Person(name, age, job){

 //create the object to return
 
 ```javascript
var o = new Object();

 //optional: define private variables/functions here

 //attach methods
 o.sayName = function(){
 alert(name);
 };

 //return the object
 return o;
}

var friend = Person(“Nicholas”, 29, “Software Engineer”);
friend.sayName(); //”Nicholas”


```
 


Note that there is no way to access the value of name from the returned object. The sayName()
method has access to it, but nothing else does. 





