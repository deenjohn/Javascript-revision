```javascript
  function SuperType(){
            this.colors = ["red", "blue", "green"];
        }

        function SubType(){            
        }
        
        //inherit from SuperType
        SubType.prototype = new SuperType(); // gets colors property
        
        //problem 
        //all instances of Subtype will now have this colors property
        

        var instance1 = new SubType();
        instance1.colors.push("black");
        alert(instance1.colors);    //"red,blue,green,black"
        
        var instance2 = new SubType();
        alert(instance2.colors);    //"red,blue,green,black"
```


      
