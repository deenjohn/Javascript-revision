
What if the prototype were actually an instance of another type?
That would mean the prototype itself would have a pointer to a different prototype that, in turn,
would have a pointer to another constructor. If that prototype were also an instance of another
type, then the pattern would continue, forming a chain between instances and prototypes. This is
the basic idea behind prototype chaining.

           ```javascript
 
  function SuperType(){
            this.property = true; // this property sits inside instance of Supertype
        }
        
        SuperType.prototype.getSuperValue = function(){
            return this.property; 
        };
        
        function SubType(){
            this.subproperty = false; // this property sits inside instance of Subtype
        }
        
        //inherit from SuperType
        SubType.prototype = new SuperType();
       
       This overwrites the original prototype and replaces it with a new object, which means that 
       all properties and methods that typically exist on an instance of SuperType now also exist on 
       SubType.prototype.
        
        //Subtype.prototype object gets a property from Supertype instance 
         // and it's proto points to Supertype.prototypr
        
        SubType.prototype.getSubValue = function (){
            return this.subproperty;
        };
        
        var instance = new SubType();
        alert(instance.getSuperValue());   //true
       
        alert(instance instanceof Object);      //true
        alert(instance instanceof SuperType);   //true
        alert(instance instanceof SubType);     //true

        alert(Object.prototype.isPrototypeOf(instance));    //true
        alert(SuperType.prototype.isPrototypeOf(instance)); //true
        alert(SubType.prototype.isPrototypeOf(instance));   //true
        
  
        ```



        
        
 Prototype chaining extends to the prototype search mechanism described earlier. As you may
recall, when a property is accessed in read mode on an instance, the property is first searched for
on the instance. If the property is not found, then the search continues to the prototype

for instance, a call to instance.getSuperValue() results in a
three-step search:
1) the instance, 2) SubType.prototype, and 3) SuperType.prototype,
where the method is found.










        
        
        
        
        
        
