
//It should be clear that the default binding is the lowest priority rule of the 4. So we'll just set that one aside.

// Which is more precedent, implicit binding or explicit binding? Let's test it:

function foo() {
	console.log(this.a);
}

var obj1 = {
	a: 2,
	foo: foo
};

var obj2 = {
	a: 3,
	foo: foo
};

//implicit binding
obj1.foo(); // 2
obj2.foo(); // 3

//explicit binding
obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2


//So, explicit binding takes precedence over implicit binding, which means you should ask first if explicit binding applies before checking for implicit binding.