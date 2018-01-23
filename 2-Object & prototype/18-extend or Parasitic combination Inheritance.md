

```javascript


function createAnother(original){
    var clone = Object(original); //create a new object by calling a function
     clone.sayHi = function(){ //augment the object in some way
       console.log('hi');
    };
   return clone; //return the object
}


var person = {
 name: 'Nicholas',
 friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = createAnother(person);
//anotherPerson has name , friends , sayHi
//so anotherPerson extends person object

The code in this example returns a new object based on person. The anotherPerson object has all
of the properties and methods of person but adds a new method called sayHi().
 



      function object(o){
            function F(){}
            F.prototype = o;
            return new F();
        }
    
        function inheritPrototype(subType, superType){
            var prototype = object(superType.prototype);   //create object
            prototype.constructor = subType;               //augment object
            subType.prototype = prototype;                 //assign object
        }
                                
        function SuperType(name){
            this.name = name;
            this.colors = ["red", "blue", "green"];
        }
        
        SuperType.prototype.sayName = function(){
            alert(this.name);
        };

        function SubType(name, age){  
            SuperType.call(this, name);
            
            this.age = age;
        }

        inheritPrototype(SubType, SuperType);
        
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

       
