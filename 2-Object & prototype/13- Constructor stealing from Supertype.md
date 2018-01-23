
Constructor Stealing

In an attempt to solve the inheritance problem with reference values on prototypes, developers
began using a technique called constructor stealing (also sometimes called object masquerading
or classical inheritance)

Solution to problem 1

```javascript
function Supertype(){

   this.colors = ["red" , "black" , "yellow"];

}

function Subtype(){
    Supertype.call(this) ; //borrowing colors array , this referes to Subtype object 
     //passing Subtype instance as context for Supertype constructor
}

var obj = new Subtype() ; 

var instance1 = new SubType();
instance1.colors.push(“black”);
alert(instance1.colors); //”red,blue,green,black”

var instance2 = new SubType();
alert(instance2.colors); //”red,blue,green” // from Supertype

```

 



Solution to problem 2 :

Passing Arguments

One advantage that constructor stealing offers over prototype chaining is the ability to pass arguments
into the supertype constructor from within the subtype constructor. 

```javascript
function SuperType(name){
 this.name = name;
}

function SubType(){
 //inherit from SuperType passing in an argument
 SuperType.call(this, “Nicholas”);

 //instance property
 this.age = 29;
}

var instance = new SubType();
alert(instance.name); //”Nicholas”;
alert(instance.age); //29
```





