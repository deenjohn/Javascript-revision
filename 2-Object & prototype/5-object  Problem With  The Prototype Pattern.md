

 it negates the ability to pass initialization
arguments into the constructor, meaning that all instances get the same property values by default

The real problem occurs when a property contains a reference value. Consider the following
example:

```javascript


function Person(){
        }
        
        Person.prototype = {
            constructor: Person,
            name : "Nicholas",
            age : 29,
            job : "Software Engineer",
            friends : ["Shelby", "Court"], //reference value to array object
            sayName : function () {
                alert(this.name);
            }
        };
        
        var person1 = new Person();
        var person2 = new Person();
        
        person1.friends.push("Van");
        
        alert(person1.friends);    //"Shelby,Court,Van"
        alert(person2.friends);    //"Shelby,Court,Van"
        alert(person1.friends === person2.friends);  //true


```



 The person1.friends array is altered by adding another
string. Because the friends array exists on Person.prototype, not on person1, the changes made
are also refl ected on person2.friends (which points to the same array). If the intention is to have
an array shared by all instances, then this outcome is okay. Typically, though, instances want to
have their own copies of all properties. This is why the prototype pattern is rarely used on its own.

