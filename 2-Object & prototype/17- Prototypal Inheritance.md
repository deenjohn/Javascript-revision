
 prototypes allow you to create new objects based on 
 "existing objects"
 without the need for defining custom types


```javascript
     function object(o){
            function F(){}
            F.prototype = o;
            return new F();
        }
        
        var person = {
            name: "Nicholas",
            friends: ["Shelby", "Court", "Van"]
        };
        
        var anotherPerson = object(person);
        anotherPerson.name = "Greg";
        anotherPerson.friends.push("Rob");
        
        var yetAnotherPerson = object(person);
        yetAnotherPerson.name = "Linda";
        yetAnotherPerson.friends.push("Barbie");
        
        alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
        
        person.friends is shared not only by person but also with anotherPerson and yetAnotherPerson. 
        Effectively, this code has created two clones of person.
        
        
        
        
        Object.create does the same thing
        
   var person = {
      name: "Nicholas",
      friends: ["Shelby", "Court", "Van"]
  };
  
  var anotherPerson = Object.create(person);
  // anotherPerson'S prototype gets friends array , name = "name: "Nicholas"
  anotherPerson.name = "Greg";
  anotherPerson.friends.push("Rob");
  
  var yetAnotherPerson = Object.create(person);
  yetAnotherPerson.name = "Linda";
  yetAnotherPerson.friends.push("Barbie");
  
  console.log(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
  
  so person is shared between anotherPerson and yetAnotherPerson
  
  
  
  
  
  
```


      
