http://exploringjs.com/es6/ch_arrow-functions.html

### 13.7.1 Extracting methods 

If an extracted method is to work as a callback, you must specify a fixed this, otherwise it will be invoked as a 
function (and this will be undefined or the global object). For example:

Problem :
obj.on('anEvent', this.handleEvent); 

Solutions :

obj.on('anEvent', this.handleEvent.bind(this));

An alternative is to use an arrow function:

obj.on('anEvent', event => this.handleEvent(event));

### 13.7.2 this via parameters 

The following code demonstrates a neat trick: For some methods, you don’t need bind() for a callback, 
because they let you specify the value of this, via an additional parameter. filter() is one such method:

const as = new Set([1, 2, 3]);
const bs = new Set([3, 2, 4]);

const intersection = [...as].filter(bs.has, bs); //bs as this
    // [2, 3]
However, this code is easier to understand if you use an arrow function:

const as = new Set([1, 2, 3]);
const bs = new Set([3, 2, 4]);
const intersection = [...as].filter(a => bs.has(a));
    // [2, 3]
    

### 13.8 Arrow functions versus normal functions 

An arrow function is different from a normal function in only two ways:

The following constructs are lexical: arguments, super, this, new.target
It can’t be used as a constructor: Normal functions support new via the internal method [[Construct]] and the property prototype. Arrow functions have neither, which is why new (() => {}) throws an error.
Apart from that, there are no observable differences between an arrow function and a normal function. For example, typeof and instanceof produce the same results:

> typeof (() => {})
'function'
> () => {} instanceof Function
true

> typeof function () {}
'function'
> function () {} instanceof Function
true
\

### Arrow function doesn't get default arguments variables.





