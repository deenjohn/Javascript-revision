
https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault

https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault




```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Understanding JavaScript's Capture</title>
</head>
<body class="bod">

  <div class="one">
    <div class="two">
      <div class="three">
      </div>
    </div>
  </div>

<style>
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after { box-sizing: inherit; }

  div {
    width:100%;
    padding:100px;
  }

  .one {
    background: thistle;
  }

  .two {
    background:mistyrose;
  }

  .three {
    background:coral;
  }
</style>

<button></button>
<script>
  const divs = document.querySelectorAll('div');
  const button = document.querySelector('button');

  function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
  }

  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
  }));

  button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });

</script>
</body>
</html>


```






  
  ### event.stopPropogation() works in both Capturing and Bubbling phase
  
  
 // Capturing phase example
  
  ```html

<body>
  <ul id="grid">
    <li><img src="images/ylw.gif" alt="yellow"></li>
    <li><img src="images/org.gif" alt="orange"></li>
    <li><img src="images/ppl.gif" alt="purple"></li>
    <li><img src="images/blu.gif" alt="blue"></li>
    <li><img src="images/pnk.gif" alt="pink" id="pink"></li>
    <li><img src="images/grn.gif" alt="green"></li>
    <li><img src="images/ygr.gif" alt="ygreen"></li>
    <li><img src="images/gry.gif" alt="gray"></li>
    <li><img src="images/red.gif" alt="red"></li>
  </ul>
  <script>
    document.getElementById('grid').addEventListener('click', function (e) {
      console.log(e.currentTarget);
      e.stopPropagation()
    }, true);

    document.getElementById('pink').addEventListener('click', function (e) {
      console.log(e.currentTarget);

    }, true);
  </script>

</body>

```

