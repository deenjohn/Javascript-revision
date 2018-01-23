
 The basic idea of this pattern is to create a constructor that simply wraps the creation and 
 return of another object while looking like a typical constructor.
 
 
 ```javascript

function Person(name, age, job){
            var o = new Object();
            o.name = name;
            o.age = age;
            o.job = job;
            o.sayName = function(){
                alert(this.name);
            };    
            return o;
        }
        
        var friend = new Person("Nicholas", 29, "Software Engineer");
        friend.sayName();  //"Nicholas
        
```

 
        
        
This is exactly the same as the factory pattern except that the function is called as a constructor, using the new operator. 

When a constructor doesn’t return a value, it returns the new object instance by default.

Adding a return statement at the end of a constructor allows you to override the value that is 
returned when the constructor is called.


This pattern allows you to create constructors for objects that may not be possible otherwise. For
example, you may want to create a special array that has an extra method. Since you don’t have
direct access to the Array constructor, this pattern works:

         
         ```javascript
         
         function SpecialArray(){       
      
                 //create the array
                 var values = new Array();
                 
                 //add the values
                 values.push.apply(values, arguments);
                 
                 //assign the method
                 values.toPipedString = function(){
                     return this.join("|");
                 };
                 
                 //return it
                 return values;        
             }
             
             ```
            
var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString()); //"red|blue|green"
     
console.log(colors instanceof SpecialArray); //false

         
       


A few important things to note about this pattern: there is no relationship between the
returned object and the constructor or the constructor’s prototype; the object exists just as if it
were created outside of a constructor. Therefore, you cannot rely on the instanceof operator
to indicate the object type. Because of these issues, this pattern should not be used when other
patterns work.





