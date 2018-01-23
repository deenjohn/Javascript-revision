
### Combination inheritance (sometimes also called pseudoclassical inheritance) combines prototype 
chaining and constructor stealing to get the best of each approach. 
The basic idea is to use prototype chaining to inherit properties and methods on the prototype and to use constructor
stealing to inherit instance properties. This allows function reuse by defi ning methods on the
prototype and allows each instance to have its own properties
   
```javascript


        function SuperType(name){  
            this.name = name;
            this.colors = ["red", "blue", "green"];
        }
        
        SuperType.prototype.sayName = function(){
            console.log(this.name);
        };

        function SubType(name, age){  
            SuperType.call(this, name);
            
            this.age = age;
        }

        SubType.prototype = new SuperType(); 
         //SubType.prototype object has name =undefined , colors  

        
        SubType.prototype.sayAge = function(){   // sayAge added to SubType.prototype object
            console.log(this.age); 
        };
        
        var instance1 = new SubType("Nicholas", 29);
        //instance1 has age = 29 , SuperType.call(this, name) , so gets colors , name property
        
        
        
        instance1.colors.push("black");
        console.log(instance1.colors);  //"red,blue,green,black"
        instance1.sayName();      //"Nicholas";
        instance1.sayAge();       //29
        
       
        var instance2 = new SubType("Greg", 27);
       console.log(instance2.colors);  //"red,blue,green"
        instance2.sayName();      //"Greg";
        instance2.sayAge(); 




```
   
### Addressing the downsides of both prototype chaining and constructor stealing, combination
inheritance is the most frequently used inheritance pattern in JavaScript.
It also preserves the behavior of instanceof and isPrototypeOf() for identifying the composition of objects.
  
