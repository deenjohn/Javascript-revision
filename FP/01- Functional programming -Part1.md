1) forEach

```javascript

var arr = [1, 2, 3];
var obj = {
  name: "deen",
  location: "delhi"
};

function forEach(arr, cb) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      cb(arr[i], i);
    }
  } else {
    var keys = Object.keys(arr);

    for (var i = 0; i < keys.length; i++) {
      cb(arr[keys[i]], i);
    }
  }
}

forEach(obj, function(val, key) {
  console.log("key : ", key);
  console.log("val : ", val);
});

```


Using Switch - case


```javascript

var arr = [1, 2, 3];
var obj = {
  name: "deen",
  location: "delhi"
};

function forEach(arr, cb) {
  switch (Object.prototype.toString.call(arr)) {
    case "[object Array]":
      for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i);
      }
      break;
    case "[object Object]":
      var keys = Object.keys(arr);

      for (var i = 0; i < keys.length; i++) {
        cb(arr[keys[i]], i);
      }
      break;
    default:
      throw new Error("No arraylike object found");
      break;
  }
}

forEach(obj, function(val, key) {
  console.log("key : ", key);
  console.log("val : ", val);
});


```


.......................................................................

2) Every 

```javascript



var _ = require("lodash");

var arr = [1, 2, 3];
var obj = {
  name: "deen",
  location: "delhi"
};

function arrayEvery(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

var res = arrayEvery(arr, (val, index, collection) => {
  if (val < 3) {
    return true;
  }
  return false;
});

console.log(res);

```

...................................................

3) Filter

```

var arr = [1, 2, 3];
var obj = {
  name: "deen",
  location: "delhi"
};
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0, //this index keeps track of only filtered items
    result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var res = arrayFilter(arr, (val, index, collection) => {
  if (val < 3) {
    return true;
  }
  return false;
});

console.log(res);


```
..............................................

4) find

```javascript


var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true }
];

function find(users, predicate) {
  var index = 0,
    length = users == null ? 0 : users.length;

  while (index < length) {
    var value = users[index];
    if (predicate(value, index, users)) {
      return value;
    }
    index++;
  }
}

var res = find(users, function(o) {
  return o.age < 40;
});
console.log(res);



```

..........................................................


5) map  - like in underscore libary

map  [ { user : "barney" } , {user : "deen" } ] 
to   [fn({ { user : "barney" }) , fn({ { user : "deen" })]

Requirements of map function : 
 1) should return result array of same length as the collection passed
 2) map each value in array to the iteratee function.
    on each array value , run a function created based on 2nd argument of map. map = function(obj, iteratee, context).
      This 2nd argument passed to map could be an object "key" like "user" , or another obj , or null , 
       or a function.
 
 requirement 2nd : create a function based on 2nd argument to map function 
 
 ```javascript
var cb = function(value, context, argCount) {
  //case : null value
  if (value == null) return identity;
  //case 2 : value is a function
  if (isFunction(value)) return optimizeCb(value, context, argCount);
  //case 3 : value is an object
  if (isObject(value)) return matcher(value);
  //case 4 : value is an object "key" 
  return property(value);
};

//helper functions for each case 

// null
var identity = function(value) {
  return value;
};

// function
var isFunction = function(obj) {
  return typeof obj == "function" || false;
};


// "key"
var property = function(key) {
  return function(obj) {
    console.log("property ", obj);
    return obj == null ? void 0 : obj[key];
  };

//object

var isObject = function(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
};

var matcher = function(attrs) {
  attrs = extendOwn({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
};

var extendOwn = function(keysFunc, undefinedOnly) {
  return function(obj) {
    var length = arguments.length;
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
        keys = keysFunc(source),
        l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
};


```

requirement 1 :

```javascript

var map = function(obj, iteratee, context) {
 
  iteratee = cb(iteratee, context); //requirement 2nd 
  
  var keys = Object.keys(obj),
    length = (keys || obj).length,
    results = Array(length); // create an array of length same as obj //requirement 1st
    //map each value in collection to the iteratee function
  for (var index = 0; index < length; index++) {
    var currentKey = keys ? keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj); //returns obj[key]
  }
  return results;
};

map(array , arg) to new array created based on function "iteratee"  = iteratee(arg)

```

TEST :

```javascript

var users = [{ user: "barney" }, { user: "fred" }];
var res = map(users, "user");

console.log(res);

```

.................................................................................

6) reduce 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

on each value in passed array , run a function , 
at each step accumulates the values reurned by running function on each of these values 
return the acculated result. Result could be acculated in an array : [] , an object {} , a single variable etc.


```javascript
var reduceNew = function(arr, fn, accu) {
  var accu2 = accu; // accu is initial value of array or passed initial value
  for (var i = 0; i < arr.length; i < i++) {
    accu2 = fn(accu2, arr[i], i);
    //console.log(accu)
  }
  return accu2;
};
```



Test :

1)
//pass  0 as initial value of accumulator
```javascript
var res = reduceNew(
  [1, 2, 3],
  function(acc, val, index) {
    return acc + val;
  },
  0
);

console.log(res);
```


2) TEST

//for each iteration ,  acc[index] = val * 2 , is returned
```javascript


var res = reduceNew(
  [1, 2, 3],
  function(acc, val, index) {
    acc[index] = val * 2;
    return acc;
  },
  []
);

console.log(res);

```


....................................................

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

The first time the callback is called, accumulator and currentValue can be one of two values. 
If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, 
and currentValue will be equal to the first value in the array.

If no initialValue is provided, then accumulator will be equal to the first value in the array, 
and currentValue will be equal to the second.

var reduceNew = function(arr, fn, accu) {
  var accu2 = accu; // accu is initial value of array or passed initial value
  for (var i = 1; i < arr.length; i < i++) {
    accu2 = fn(accu2, arr[i], i);
    //console.log(accu)
  }
  return accu2;
};

1)
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
ex 1 - 
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42 , reduce starts from 2nd array value i.e { x: 42 }
    return acc =   maxCallback({ x: 22 } ,{ x: 42 }) // returns 42
  
ex2 : 
[ { x: 22 } ].reduce( maxCallback ); // { x: 22 } // returns the accumulator i.e initial array value 

ex3 :
[   ].reduce( maxCallback ); // TypeError //If the array is empty and no initialValue is provided, TypeError will be thrown.

// map/reduce; better solution, also works for empty arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
                        
                        
2)
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) { // fn
    return a.concat(b);
  },
  []
);

//in 1st iteration , acc = []. 
   so acc = fn(acc , arr[i]) ; 
   // fn(acc , [0, 1])  // return [].concat([0, 1])
// in 2nd iteration , 
  acc = [0, 1]  , curr = [2, 3]
  acc = fn(acc , [2, 3]) 
   return [0, 1].concat([2, 3])
   
   
 3)
 Counting instances of values in an object
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    var countedNames = names.reduce(function (allNames, name) { 
        if (name in allNames) {
          allNames[name]++;
        }
        else {
          //if no property with name in allNames
          allNames[name] = 1;
        }
        return allNames;
      }, {}); // acc = {}
 
 // countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
 
7) reduceRight

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

array.reduceRight(function(previousValue, currentValue, index, array) {
  // ...
});

```javascript
 var array = [[0, 1], [2, 3], [4, 5]];

var result = array.reduceRight(function(flattened, other) {
   //flattened = [] , other = [ 4, 5 ]
  return flattened.concat(other);
}, []);
console.log(result);
```
..............................................................

8) flatMap

```javascript

function flatten(items) {
  const flat = [];

  items.forEach(item => {
    console.log(item);
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

var res = flatten([1, [2], [3, [[4]]]]);
console.log(res);

```

.............................................

9) groupby  - lodash

_.groupBy([6.1, 4.2, 6.3], Math.floor);
  // => { '4': [4.2], '6': [6.1, 6.3] }
   
  _.groupBy(['one', 'two', 'three'], 'length');

var groupBy = createAggregator(setter function ) ;

createAggregator function returns below function

```javascript

return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
       
       //func is either arrayAggregator or  baseAggregator function
    };

function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }



//value   ‘length’
function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }


// iteratee        getIteratee(iterate,2) ),_<<
>   function baseProperty(key) {
    return

    function(object) {
      return object == null ? undefined : object[key];
    };

function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }


```

...............................................................

10) Includes

```javascript

 function includes(collection, value, fromIndex, guard) {
      
      collection = isArrayLike(collection) ? collection : values(collection);
      //values is Object.values(collection)
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      
      return isString(collection)
        
        ? (fromIndex <= length && 
                   collection.indexOf(value, fromIndex) > -1)
        
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }


```

  
...........................................

11)  Debounce

https://stackoverflow.com/questions/24004791/can-someone-explain-the-debounce-function-in-javascript
https://davidwalsh.name/javascript-debounce-function
https://css-tricks.com/the-difference-between-throttling-and-debouncing/
https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf
https://css-tricks.com/debouncing-throttling-explained-examples/
http://benalman.com/projects/jquery-throttle-debounce-plugin/

```javascript

var debounce,
  debounceBtn,
  scope;

debounce = function(func, delay) {
  var inDebounce;
  inDebounce = undefined;
  return function() {  // this function is returned and attached to button as eventlistner 
    var args, context;
                         //console.log("clear previous timeout");
    clearTimeout(inDebounce);
    context = this;
    args = arguments;
    return (inDebounce = setTimeout(function() {
      return func.apply(context, arguments);
    }, delay));
  };
};

debounceBtn = document.getElementById("debounce");

debounceBtn.addEventListener(
  "click",
  debounce(function() {
    return console.log("[DEBOUNCE] Hey! It is", new Date().toUTCString());
  }, 5000)
);

```



12) Max

```javascript

var people = [{ name: "Fred", age: 65 }, { name: "Lucy", age: 36 }];
var res = _.max(people, function(p) {
  return p.age;
});

console.log(res);

_.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

```

.........................................

13) findKey

 ```javascript
 
var users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true }
};

var findKey = function(obj, iteratee) {
  let keys = Object.keys(obj);
  let length = keys.length;
  for (let i = 0; i < length; i++) {
    let key = keys[i];
    let ar = obj[key]; //
    console.log(ar); //{ age: 36, active: true }
    if (iteratee(ar)) {
      return key;
    }
  }
};

case 1 : function

let res = findKey(users, function(o) {
  return o.age < 40;
});
 //barney
 
 case 2 : matcher object -  { age: 1, active: true }
 
 let res = findKey(users, function(o) {
  let toMatch = { age: 1, active: true };
  let keys = Object.keys(o);
  let length = keys.length;
  for (let i = 0; i < length; i++) {
    if (o[keys[i]] !== toMatch[keys[i]]) {
      return false;
      break;
    }
  }
  return true;
});

console.log(res);


case 3 : property

let res = findKey(users, function(o) {
  let keys = Object.keys(o);
  let length = keys.length;
  for (let i = 0; i < length; i++) {
    if (keys[i] == "active") {
      return true;
    }
  }
  return false;
});

console.log(res);

 
 
```

A better way would be to create a function that creates an iteratee function out of predicate argument 

predicate argument could be :
case 1 function : function(o) { return o.age < 40; }
case 2 object : { 'age': 1, 'active': true }
case 3 matchesProperty: ['active', false]
case 4 property : 'active'


getIteratee :

```javascript

function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }


function baseIteratee(value) {
      
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }
    
```

14) bindAll

```javascript

var Cow = function(name) {
  this.name = name;
};
Cow.prototype.moo = function() {
  return this.name + "moo";
};

var cow1 = new Cow("alice");
var cow2 = new Cow("bob");

cow1.moo(); // alice moos
cow2.moo(); // bob moos

_.bindAll(cow1, "moo");


_.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];               // function name like "moo"
      
        obj[key] = _.bind(obj[key], obj);
       
       /*above line is same as 
       
        var func = cow1.moo;
        func = func.bind(cow1);
        
        */
    }
    return obj;
  };
 
   // nativeBind is same as Function.prototype.bind 
  // slice.call(arguments, 1)  is ,  Cow object > {name : "alice"}
 
 
 _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };
  
```


................................
15) compose



```javascript

f(g(h()))

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome('moe');
=> 'hi: MOE!'

_.compose = function() {
    var args = arguments;
    var start = args.length - 1;  //start from rightmost value
    
    return function() {   //  another function is returned after _.compose(greet, exclaim);
      var i = start;
      var result = args[start].apply(this, arguments);           //  arguments like 'moe'
      while (i--) result = args[i].call(this, result);          // no of iteration same as length of arguments to compose
                                                               // result , passing earlier computer result to another function 
      return result;
    };
  };

```




  
  














