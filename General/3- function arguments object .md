
Never modify function arguments object

```javascript

The arguments object may look like an array, but sadly it does not always behave like one.
arguments object itself is not an instance of the standard Array type,
so we cannot directly call arguments.shift()
Thanks to the call method, you might expect to be able to extract the
shift method from an array and call it on the arguments object. 

function callMethod(obj, method) {
     var shift = [].shift;
     console.log(arguments);
     shift.call(arguments);
     console.log(arguments);

     shift.call(arguments);
     console.log(arguments);

      console.log(method); // 25
     var c = arguments ;
    //return obj[method].apply(obj, arguments);
}

var obj = {
   add: function(x, y) { return x + y; }
};

callMethod(obj, "add", 17, 25);


The reason why this fails is that the arguments object is not a copy
of the function’s arguments. In particular, all named arguments are
aliases to their corresponding indices in the arguments object. So obj
continues to be an alias for arguments[0] and method for arguments[1],
even after we remove elements from the arguments object via shift.
This means that while we appear to be extracting obj["add"], we are
actually extracting 17[25]! At this point, everything begins to go haywire:
Thanks to the automatic coercion rules of JavaScript, this promotes
17 to a Number object, extracts its "25" property (which does
not exist), produces undefined, and then unsuccessfully attempts to
extract the "apply" property of undefined to call it as a method.

function callMethod(obj, method)

obj = arguments[0] ;
method =  arguments[1] ;


We can fix the callMethod implementation by copying arguments, and
since we only need the elements after obj and method, we can pass a
starting index of 2 to slice:


function callMethod(obj, method) {
     var args = [].slice.call(arguments, 2);  // copy values from arguments to args
     return obj[method].apply(obj, args);
}

At last, callMethod works as expected:

var obj = {
 add: function(x, y) { return x + y; }
};

callMethod(obj, "add", 17, 25); // 42



Things to Remember
✦ Never modify the arguments object.
✦ Copy the arguments object to a real array using [].slice.call(arguments)
before modifying it


```












