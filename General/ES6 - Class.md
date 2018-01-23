

```javascript


 
................................................

http://exploringjs.com/es6/images/classes----methods_150dpi.png

http://exploringjs.com/es6/ch_classes.html

class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {  
        return 'classy';
    }
    prototypeMethod() {          // goes inside Foo.prototype object
        return 'prototypical';
    }
}
const foo = new Foo(123); 


....................

Yyou can manually add a static property:

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
Point.ZERO = new Point(0, 0);

.................................

class MyClass {
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: '+value);
    }
}

You use MyClass as follows.

 const inst = new MyClass();
 inst.prop = 123; //setting value
 //setter: 123
 inst.prop       //getting value 
 //'getter'


.................................

http://exploringjs.com/es6/ch_classes.html#_subclassing

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // (A)
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color; // (B)
    }
}



Again, this class is used like you’d expect:

 const cp = new ColorPoint(25, 8, 'green');
 cp.toString()
  // '(25, 8) in green'

 cp instanceof ColorPoint
  // true
 cp instanceof Point
 // true

..................................
class Animal {
      constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
      }
      drink() {
        this.thirst -= 10;
        return this.thirst;
      }
      eat(food) {
        this.belly.push(food);
        return this.belly;
      }
    }

    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
      bark() {
        console.log('BARK BARK BARK!');
      }
    }

    const rhino = new Animal('Rhiney');
    const snickers = new Dog('Snickers', 'King Charles');
    //  snickers gets all the properties declared in Animal constructor + breed

    bark function goes inside Dog prototype object //Dog.prototype or snickers._proto 
    
    drink and eat goes inside Animal prototype object .
 ..........................................................................   
The following ES6 code makes a supermethod call in line B.

http://exploringjs.com/es6/ch_classes.html#superproperties
http://exploringjs.com/es6/images/classes----supercalls_150dpi.png

class Person {
    constructor(name) {
        this.name = name;
    }
    toString() { // (A)
        return `Person named ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    toString() {
        return `${super.toString()} (${this.title})`; // (B)
    }
}

const jane = new Employee('Jane', 'CTO');
console.log(jane.toString()); // Person named Jane (CTO)








```
