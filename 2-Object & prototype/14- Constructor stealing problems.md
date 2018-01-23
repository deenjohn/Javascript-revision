
The downside to using constructor stealing exclusively is that it introduces the same problems as the
constructor pattern for custom types: methods must be defined inside the constructor, so there’s no
function reuse. 

Furthermore, methods defined on the supertype’s prototype are not accessible on
the subtype, so all types can use only the constructor pattern. Because of these issues, constructor
stealing is rarely used on its own.

Combination Inheritance
Combination inheritance (sometimes also called pseudoclassical inheritance) combines prototype
chaining and constructor stealing to get the best of each approach. The basic idea is to use
prototype chaining to inherit properties and methods on the prototype and to use constructor
stealing to inherit instance properties. This allows function reuse by defi ning methods on the
prototype and allows each instance to have its own properties

```javascript
function SuperType(name){
            this.name = name;
            this.colors = ["red", "blue", "green"];
        }
        
        SuperType.prototype.sayName = function(){
            alert(this.name);
        };

        function SubType(name, age){  
            SuperType.call(this, name);   //constructor stealing
            
            this.age = age;
        }

        SubType.prototype = new SuperType();  // prototype chaining
        
        SubType.prototype.sayAge = function(){
            alert(this.age);
        };
        
        var instance1 = new SubType("Nicholas", 29);
        instance1.colors.push("black");
        alert(instance1.colors);  //"red,blue,green,black"
        instance1.sayName();      //"Nicholas";
        instance1.sayAge();       //29
        
       
        var instance2 = new SubType("Greg", 27);
        alert(instance2.colors);  //"red,blue,green"
        instance2.sayName();      //"Greg";
        instance2.sayAge();       //27
```

      
        
        
        
        
        


