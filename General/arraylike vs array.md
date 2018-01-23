
https://stackoverflow.com/questions/4775722/check-if-object-is-array

arraylike : while it has a .length property and numerically-indexed values, it doesn't have any of the Array methods, like .concat or .slice.

```javascript

var arr = [1, 2, 3];
var obj = {
  name: "deen",
  location: "delhi"
};

```


//check if object

```javascript

var res = Object.prototype.toString.call(obj); //[object Object]
console.log(res);


```


//test if obj is an array

```javascript

var res = Object.prototype.toString.call(arr); //[object Array]
console.log(res);

```

