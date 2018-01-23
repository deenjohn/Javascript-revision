
http://benalman.com/news/2010/11/immediately-invoked-function-expression/

```javascript


var a = 2;

(function IIFE( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

})( window );

console.log( a ); // 2

.................................................................

<div>DIV 0</div>
<div>DIV 1</div>

<script type="text/javascript">
  var div = document.getElementsByTagName("div");

 for (var i = 0; i < div.length; i++) (function(n){
   
   div[n].addEventListener("click", function(){
     alert("div #" + n + " was clicked.");       //closure 
   }, false);
   
 })(i);
 
</script>

```


