
http://blog.bigbinary.com/2011/08/18/understanding-bind-and-bindall-in-backbone.html
http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work
best article on bind : https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/


#### Call


1) Ex1 :

```javascript
function Supertype(){

   this.colors = ["red" , "black" , "yellow"];

}

function Subtype(){
    Supertype.call(this) ; //borrowing colors array , this referes to Subtype object 
}

var obj = new Subtype() ;
```
 


2) Ex 2 :

```javascript

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}


var cheese = new Food('feta', 5);
//create an empty object - {} , then call Food constructor which calls Product 
on context of empty object created before and adds "name" and "price" property. then Food constructor adds category property


 // Food {name: "feta", price: 5, category: "food"}

```



3) Ex 3


```javascript
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

```

4)Ex 4

```javascript
var obj = {} 
Array.prototype.push.call(obj,1)

console.log(obj) 
 0: 1  // obj behaves like an array
```



5) Ex 5

```javascript
<div>One</div>
<div>Two</div>
<div>Three</div>

var res = document.getElementsByTagName("div")

log(res)
[div, div, div]

res = Array.prototype.slice.call(res,0);

```


6)Ex 6

```javascript

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

```


7 ) Ex 7

http://davidshariff.com/blog/borrowing-methods-in-javascript/

```javascript

var score = Function.prototype.call.bind(scoreCalculator.getScore);
score(player1);

is doing this

scoreCalculator.getScore.call(player1)


var scoreCalculator = {
    getSum: function(results) {
        var score = 0;
        for (var i = 0, len = results.length; i < len; i++) {
            score = score + results[i];
        }
        return score;
    },
    getScore: function() {
        return scoreCalculator.getSum(this.results) / this.handicap;
    }
};

var player1 = {
    results: [69, 50, 76],
    handicap: 8
};

var player2 = {
    results: [23, 4, 58],
    handicap: 5
};

var score = Function.prototype.call.bind(scoreCalculator.getScore);

// Score: 24.375
console.log('Score: ' + score(player1));

// Score: 17
console.log('Score: ' + score(player2))

Ex 9 :

var table1 = {
    entries: [],
    addEntry: function(key, value) {
        this.entries.push({ key: key, value: value });
    },
    forEach: function(f, thisArg) {
        var entries = this.entries;
        for (var i = 0, n = entries.length; i < n; i++) {
           var entry = entries[i];
            f.call(thisArg, entry.key, entry.value, i);
           }
        }
};

//table1.forEach(table2.addEntry, table2);
.. copying each entry from table1 to table2



This allows consumers of the object to use a method as the callback
function f of table.forEach and provide a sensible receiver for the
method. For example, we can conveniently copy the contents of one
table into another:
table1.forEach(table2.addEntry, table2);
This code extracts the addEntry method from table2 (it could have
even extracted the method from Table.prototype or table1), and the
forEach method repeatedly calls addEntry with table2 as the receiver.
Notice that even though addEntry only expects two arguments,
forEach calls it with three: a key, value, and index. The extra index
argument is harmless since addEntry simply ignores it.


 Use the call method to call a function with a custom receiver.
✦ Use the call method for calling methods that may not exist on a
given object.
✦ Use the call method for defining higher-order functions that allow
clients to provide a receiver for the callback.


```



...................................................................................................................


### apply
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

func.apply(thisArg, [argsArray])

The apply method takes an array of arguments and calls the function as
if each element of the array were an individual argument of the call.

var scores = getAllScores();
average.apply(null, scores);
If scores turns out to have, say, three elements, this will behave the
same as if we had written:
average(scores[0], scores[1], scores[2]);



Things to Remember
✦ Use the apply method to call variadic functions with a computed
array of arguments.
✦ Use the first argument of apply to provide a receiver for variadic
methods.
Use arguments to Create Variadic Functions

Ex : 
apply accepts an array and it applies the array as parameters to the actual function. So,

Math.max.apply(Math, list);
can be understood as,

Math.max("12", "23", "100", "34", "56", "9", "233");
So, apply is a convenient way to pass an array of data as parameters to a function. Remember

console.log(Math.max(list));   # NaN
will not work, because max doesn't accept an array as input.

There is another advantage, of using apply, you can choose your own context. The first parameter, you pass to apply of any function, will be the this inside that function. But, max doesn't depend on the current context. So, anything would work in-place of Math.

console.log(Math.max.apply(undefined, list));   # 233
console.log(Math.max.apply(null, list));        # 233
console.log(Math.max.apply(Math, list));        # 233
Since apply is actually defined in Function.prototype, any valid JavaScript function object, will have apply function, by default.




...................................................
#### Bind

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

### How Bind works internally :

```javascript

Function.prototype.bind = function (scope) {
    var fn = this;
    return function () {
        return fn.apply(scope);
    };
}

```

Ex 1 :

```javascript

var person = {
 
  firstName : "deen"
  lastName   : "john"
  getFullName : function(){

      var full = this.firstName  + ' '+ this.lastName ;
      return full ;

  }
}
var logName = function(lang1, lang2){
    
}
var logPerson = logName.bind(person) 
  // Create a new function with 'this' bound to person
  // returns a copy of logName pointing to object person
 // bind doesn't call the function but creates the copy
 
 
 function currying 
 
 function multiply(a,b) {
      return a*b;
      
 }
 
 var multiplyBy2 = multiply.bind(this,2);
 
 is same as :
 
 function multiplyBy2(b) {
      var a =2;
      return 2*b;
      
 }

```


 
Ex 2 :
 
 ```javascript
 
 var buffer = {
    entries: [],
    add: function(s) {
      this.entries.push(s);
    },
    concat: function() {
       return this.entries.join("");
    }
};

Problem :
var source = ["867", "-", "5309"];
source.forEach(buffer.add); // error: entries is undefined , this points to global

Solution :

source.forEach(buffer.add, buffer); // buffer as this
 
 or
 
 source.forEach(function(s) {
 buffer.add(s);
});

or

source.forEach(buffer.add.bind(buffer));

```

# Things to Remember
- Beware that extracting a method does not bind the method’s
receiver to its object.
- When passing an object’s method to a higher-order function, use an
anonymous function to call the method on the appropriate receiver.
- Use bind as a shorthand for creating a function bound to the appropriate
receiver.


ex 3 :

```javascript

// Create a function with a preset leading argument

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);
leadingThirtysevenList has  ["[[BoundArgs]]"] , whose 0th indexis set to value 37

var list2 = leadingThirtysevenList(1, 2, 3);   // 37 at 0 index ,  is concat with 1, 2, 3
// [37, 1, 2, 3]


var list3 = leadingThirtysevenList(); 
// [37]


```

ex 4 :

use bind to curry functions

```javascript

var paths = ["deenjohn/learn-rxjs", "deenjohn/RXJS-The-confusing-topics"];
var siteDomain = "github.com";

The first two arguments to simpleURL are fixed for each iteration, and only the third argument is needed

function simpleURL(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}

var urls = paths.map(function(path) {
  return simpleURL("http", siteDomain, path);
});

console.log(urls);

var urls2 = paths.map(simpleURL.bind(null, "http", siteDomain));
console.log(urls2);

```

#### ex 5 :
```javascript

const partial = ( f, ...args ) => f.bind( null, ...args );

const curry =
    f =>
    a =>
    f.length === 1 ? f( a ) : curry( partial( f, a ) );

console.log( curry( (a, b, c) => a*b*c )(2)(3)(4) );

```

```sh

Notice how the anonymous function uses the same protocol string and the same site domain string on 
each iteration of map; 
the first two arguments to simpleURL are fixed for each iteration, and only the third argument is needed. 

var urls = paths.map(simpleURL.bind(null, "http", siteDomain));


The call to simpleURL.bind produces a new function that delegates to simpleURL. As always, the first argument to bind provides
the receiver value.

```


Note :
When should be use 'apply' and 'call' ?
Underscore lib has compose function which uses both call and apply in same function.
 
 ```javascript
_.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments); 
      // you can pass the whole argument object
      //having function apply saves a lot of effort from converting an array object to individual values
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

```






