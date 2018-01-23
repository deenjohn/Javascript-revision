

```javascript




var f = function double(x) { return x * 2; };

According to the ECMAScript specification, this binds the function to a variable f rather than double

..................................................
named function for recursion

var f = function find(tree, key) {
  if (!tree) {
     return null;
   }
   if (tree.key === key) {
      return tree.value;
   }
    return find(tree.left, key) ||  find(tree.right, key);
 };
 
 Note that find is only in scope within the function itself. Unlike a
function declaration, a named function expression can’t be referred to
externally by its internal name:

find(myTree, "foo"); // error: find is not defined


Using named function expressions for recursion may not seem particularly useful, 
since it’s fine to use the outer scope’s name for the function:

var f = function(tree, key) {
   if (!tree) {
     return null;
   }
   if (tree.key === key) {
      return tree.value;
   }
  return f(tree.left, key) || f(tree.right, key);
};

Or we could just use a declaration:
function find(tree, key) {
if (!tree) {
return null;
 }
if (tree.key === key) {
return tree.value;
 }
return find(tree.left, key) ||
find(tree.right, key);
}
var f = find;


The real usefulness of named function expressions, though, is for debugging. 
 Use named function expressions to improve stack traces in Error objects and debuggers



```

