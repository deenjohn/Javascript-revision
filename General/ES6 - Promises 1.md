
```javascript

<script>


const postsPromise = fetch('https://jsonplaceholder.typicode.com/postss');

    //case 1
    
    function myAsyncFunction(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
    };


    //case 1-1 
    //Promise.prototype.then(onFulfilled, onRejected)
    
    postsPromise.then(function (contents) {
      // fulfillment
      console.log(contents);
    }, function (err) {
      // rejection
      console.error(err.message);
    });


    //case 2 
   
    postsPromise.then(null, function (err) {
      // rejection
      console.error(err.message);
    });

    

    //case 3 
    
    let myFirstPromise = new Promise((resolve, reject) => {
      setTimeout(function () {
         //which ever function you call ist runs only
        // reject('error')
        resolve("Success!"); // Yay! Everything went well!
        reject('error')
      }, 250);
    });

    myFirstPromise
      .then((successMessage) => {
        console.log("Yay! " + successMessage);
      })
      .catch((e) => {
        console.log(e) //error //reject('error')
      });

    
    postsPromise
      .then(data => data.json())
      .then(data => {
        console.log(data)
      })
      .catch((err) => {
        console.log('catch')
        console.error(err);
      })
      
 // Each call to then() or catch() actually creates and returns another promise. This second promise is resolved
// only once the first has been fulfilled or rejected. Consider this example:

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

p1.then(function(value) {
    console.log(value);
}).then(function() {
    console.log("Finished");
});
The code outputs:

//42
//Finished

............................................................................

//chaining promise
  const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];

  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];

  function getPostById(id) {
    // create a new promise
    return new Promise((resolve, reject) => {
      // using a settimeout to mimick a databse
      setTimeout(() => {
        // find the post we want
        const post = posts.find(post => post.id === id);
        if(post) {
          resolve(post); // send the post back
        } else {
          reject(Error('No Post Was Found!'));
        }
      }, 200);
    });
  }

  function hydrateAuthor(post) {
    // create a new promise
    return new Promise((resolve, reject) => {
      // find the author details who posted
      const authorDetails = authors.find(person => person.name === post.author);
      if(authorDetails) {
        // "hydrate" the post object with the author object
        post.author = authorDetails; // { //details}
        resolve(post);
      } else {
        reject(Error('Can not find the author'));
        //if you don't use Error('Can not find the author'));
        //then it won't show the correct line where error occured
      }
    });
  }

  getPostById(3)
    .then(post => {
      return hydrateAuthor(post);
    })
    .then(post => {
      console.log(post);
    })
    .catch(err => {
      console.error(err);
    });

............................
// https://github.com/nzakas/understandinges6/blob/master/manuscript/11-Promises.md#returning-values-in-promise-chains

// Returning Values in Promise Chains

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

p1.then(function(value) {
    console.log(value);         // "42"
    return value + 1;
}).then(function(value) {
    console.log(value);         // "43"
});



............................
Returning Promises in Promise Chains

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

p1.then(function(value) {
    // first fulfillment handler
    console.log(value);     // 42
    return p2;
}).then(function(value) {
    // second fulfillment handler
    console.log(value);     // 43
});


.............................
If any promise passed to Promise.all() is rejected, the returned promise is immediately
rejected without waiting for the other promises to complete:

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    reject(43);
});

let p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
    console.log(Array.isArray(value))   // false
    console.log(value);                 // 43
});
In this example, p2 is rejected with a value of 43. The rejection handler for p4 is called immediately without waiting for p1 or p3 to finish executing (They do still finish executing; p4 just doesn't wait.)





</script>


```


