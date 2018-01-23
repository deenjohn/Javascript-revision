
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

https://stackoverflow.com/questions/899574/which-is-best-to-use-typeof-or-instanceof

The instanceof operator tests whether an object in its prototype chain has the prototype property of a constructor.

Syntax
object instanceof constructor

```javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

function C() {}
function D() {}

var o = new C();

O : object
 constructor:ƒ C()
    arguments:null
    caller:null
    length:0
    name: "C"
 
 
 o instanceof C; // true
......................



Use instanceof for custom types:

var ClassFirst = function () {};
var ClassSecond = function () {};
var instance = new ClassFirst();
typeof instance; // object
typeof instance == 'ClassFirst'; //false
instance instanceof Object; //true
instance instanceof ClassFirst; //true
instance instanceof ClassSecond; //false 
Use typeof for simple built in types:

'example string' instanceof String; // false
typeof 'example string' == 'string'; //true

'example string' instanceof Object; //false
typeof 'example string' == 'object'; //false

true instanceof Boolean; // false
typeof true == 'boolean'; //true

99.99 instanceof Number; // false
typeof 99.99 == 'number'; //true

function() {} instanceof Function; //true
typeof function() {} == 'function'; //true
Use instanceof for complex built in types:

/regularexpression/ instanceof RegExp; // true
typeof /regularexpression/; //object

[] instanceof Array; // true
typeof []; //object

{} instanceof Object; // true
typeof {}; //object
And the last one is a little bit tricky:

typeof null; //object


```
