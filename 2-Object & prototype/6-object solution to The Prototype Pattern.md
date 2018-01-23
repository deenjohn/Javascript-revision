

Combination Constructor/Prototype Pattern

The most common way of defining custom types is to combine the constructor and prototype patterns. 

The constructor pattern defines instance properties, whereas the prototype pattern defines
methods and shared properties. With this approach, each instance ends up with its own copy of
the instance properties, but they all share references to methods, conserving memory.



```javascript
problem : 
    friends : [“Shelby”, “Court”],
```


Solution : 


```javascript
 this.friends = [“Shelby”, “Court”];


// each instance can pass their own separate names,age, job which are defined in constructor

function Person(name, age, job){
 this.name = name;
 this.age = age;
 this.job = job;
 this.friends = [“Shelby”, “Court”];  //initially all instances get same friends value
}

//sayName is defined on prototype

Person.prototype = {
 constructor: Person,
 sayName : function () {
    alert(this.name);
 }
};

var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);

person1.friends.push(“Van”);  


alert(person1.friends); //”Shelby,Court,Van”
alert(person2.friends); //”Shelby,Court”
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true

```
   



