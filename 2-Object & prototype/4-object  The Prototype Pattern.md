
solves constructor pattern problem of new methods for each instance 

The benefit of using the prototype is that all of its properties and methods are shared among object instances


```javascript


function Person(){
}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
 alert(this.name);
};

Person.prototype
{
name: "Nicholas", 
age: 29,
job: "Software Engineer", 
sayName: ƒ, 
constructor: ƒ ,
__proto__ :Object
}




var person1 = new Person();
person1.sayName(); //”Nicholas”

var person2 = new Person()
person2.sayName(); //”Nicholas”

alert(person1.sayName == person2.sayName); //true

console.log(person1.constructor === Person.prototype.constructor); //true

```

.......................................

How Prototypes Work

Whenever a function is created, its prototype property is also created according to a specifi c set of
rules. By default, all prototypes automatically get a property called constructor that points back to
the function on which it is a property. 

In the previous example, for instance, Person.prototype.constructor points to Person

person () function has prototype property Person.prototype points to prototype object that has constructor 
property , that points to person () function




the isPrototypeOf() method
can be used to determine if this relationship exists between objects. Essentially, isPrototypeOf()
returns true if [[Prototype]] points to the prototype on which the method is being called, as
shown here:
alert(Person.prototype.isPrototypeOf(person1)); //true
alert(Person.prototype.isPrototypeOf(person2)); //true

In this code, the prototype’s isPrototypeOf() method is called on both person1 and person2.
Since both instances have a link to Person.prototype, it returns true.

.......................................

The hasOwnProperty() method determines if a property exists on the instance or on the prototype.

This method, which is inherited from Object, returns true only if a property of the given name
exists on the object instance, as in this example:

```javascript

function Person(){
}

Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
 alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty(“name”)); //false

person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person1.hasOwnProperty(“name”)); //true

alert(person2.name); //”Nicholas” - from prototype
alert(person2.hasOwnProperty(“name”)); //false

delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype
alert(person1.hasOwnProperty(“name”)); //false


```


..................................
Prototypes and the in Operator

There are two ways to use the in operator: on its own or as a for-in loop. When used on its own, the
in operator returns true when a property of the given name is accessible by the object, which is to say
that the property may exist on the instance or on the prototype. 

Throughout the execution of this code, the property name is available on each object either directly
or from the prototype. Therefore, calling “name” in person1 always returns true

It’s possible to determine if the property of an object
exists on the prototype by combining a call to hasOwnProperty() with the in operator like this:


//find if only exist on prototype

```javascript
function hasPrototypeProperty(object, name){
 return !object.hasOwnProperty(name) && (name in object);
}


```

......................................................................
If you’d like a list of all instance properties, whether enumerable or not, you can use 

```javascript
Object.getOwnPropertyNames() in the same way:

var keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys); //”constructor,name,age,job,sayName”


```



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames






















