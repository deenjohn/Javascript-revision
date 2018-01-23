


```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
</head>

<body>


    <div class="control-group">
        <label>Gmail</label><br>
        <label class="checkbox"><input value="0" type="checkbox">LoseWeight</label>
        <label class="checkbox"><input value="1" type="checkbox">Fantastic scam,just click here</label>
        <br><br>
        <button id="delete" value="Delete">Delete </button>

    </div>


    <script src="app.js"></script>


</body>

</html>
```

//app.js

```javascript
var control = document.getElementsByClassName("control-group");
var children = control[0].getElementsByTagName("input");
console.log(children);

var del = document.getElementById("delete");

del.addEventListener("click", function() {
  removeElement();
});

function removeElement() {
  Array.from(children).forEach(el => {
    if (el.checked) {
      console.log(el.parentElement);
      control[0].removeChild(el.parentElement);
    }
  });
}

```

