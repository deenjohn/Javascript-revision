
function foo() {
	console.log(this.a);
}

var a = 1;

foo(); // 1


//How do we know that the default binding rule applies here? We examine the call-site to see how foo() is called. In our snippet, foo() is called with a plain, un-decorated function reference. None of the other rules we will demonstrate will apply here, so the default binding applies instead.

function foo2() {
	"use strict";

	console.log(this.a2);
}

var a2 = 2;

foo2(); // TypeError: `this` is `undefined`
//A subtle but important detail is: even though the overall this binding rules are entirely based on the call-site, the global object is only eligible for the default binding if the contents of foo() are not running in strict mode; the strict mode state of the call-site of foo() is irrelevant.


function foo3() {
	console.log(this.a3);
}

var a3 = 3;

(function () {
	"use strict";

	foo3(); // 2
})();