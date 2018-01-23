```javascript

function Person(name, age, job){
 this.name = name;
 this.age = age;
 this.job = job;
 this.sayName = function(){
      alert(this.name);
 };
}
 
 var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);

```

problem :
The major downside to constructors is that methods are created once for each instance. 

So, in the previous example, both
person1 and person2 have a method called sayName(), but those methods are not the same

instance of Function. Remember, functions are objects in ECMAScript, so every time a function is
defined, it’s actually an object being instantiated. Logically, the constructor actually looks like this:

```javascript
function Person(name, age, job){
 this.name = name;
 this.age = age;
 this.job = job;
 this.sayName = new Function(“alert(this.name)”); //logical equivalent
}

```


.........................

solution

It’s possible to work around this limitation by moving the function defi nition outside of the constructor,
as follows:

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}

function sayName() {
  console.log(this.name);
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.sayName(); //"Nicholas"
person2.sayName(); //"Greg"

console.log(person1 instanceof Object); //true
console.log(person1 instanceof Person); //true
console.log(person2 instanceof Object); //true
console.log(person2 instanceof Person); //true

console.log(person1.constructor == Person); //true
console.log(person2.constructor == Person); //true

console.log(person1.sayName == person2.sayName); //true , both refer to same function
```

.........................................................................................................
problem :
global functions, can be overwritten






