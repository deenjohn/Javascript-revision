```
<!DOCTYPE html>
<html>

<body>
  <h1>Hello Plunker!</h1>
  <button id="button">Click me to change the page</button>
  <script src="script.js"></script>

</body>

</html>
```



Script.js

```javascript
const btn = document.getElementById("button");

btn.addEventListener("click", function() {
  
  // modify the page
  document.body.style.backgroundColor = "red";
  var p = document.createElement("p");
  p.innerText = "let's add some text to the page";
  document.body.appendChild(p);

  // simulate blocking / long running operation
  const start = Date.now()
  const delaySeconds = 10;
  while (Date.now() < start + delaySeconds * 1000) {}

})
```

