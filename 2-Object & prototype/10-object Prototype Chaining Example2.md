
Every object has a "constructor" property and every function has a "prototype" property

https://dpzbhybb2pdcj.cloudfront.net/resig/Figures/06fig08_alt.jpg

```javascript
<script type="text/javascript">
  function Person(){}

  Person.prototype.dance = function(){};

  function Ninja(){}

  Ninja.prototype = new Person();

  var ninja = new Ninja();

  assert(ninja instanceof Ninja,
         "ninja receives functionality from the Ninja prototype");
  assert(ninja instanceof Person, "... and the Person prototype");
  assert(ninja instanceof Object, "... and the Object prototype");
  assert(typeof ninja.dance == "function", "... and can dance!")
</script>

     var ninja (points to)> ninja instance ( containing constructor property which points to Ninja function)
    > Ninja function has prototype property which points to Ninja.prototype object 
    > Ninja.prototype points to Person object ie new Person();
    > new Person() instance has constructor which points to Person function
    > this Person function has prototype property which points to Object
 
```


