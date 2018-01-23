

https://stackoverflow.com/questions/18884249/checking-whether-something-is-iterable


The proper way to check for iterability is as follows:

solution 1 :
//obj[Symbol.iterator]  === 'function'
 
 
function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

solution 2 :

function isIterable(obj){
   if(obj === undefined || obj === null){
      return false;
   }
   return obj.iterator !== undefined;
}



### for-of works only for iterable

```
<script>
    const apple = {
      color: 'Red',
      size: 'Medium',
      weight: 50,
      sugar: 10
    };

    for (const prop in apple) {
      const value = apple[prop];
      console.log(value, prop);
    }
    for (const value of apple) {
     
      console.log(value);        //apple is not iterable
    }
    
    ```
 ......................................................
 
 ### We can use 'continue' inside for-of loop
     
  const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

  cuts.shop = 'MM MEats';

  // for (let i = 0; i < cuts.length; i++) {
  //   console.log(cuts[i]);
  // }

  // cuts.forEach((cut) => {
  //   console.log(cut);
  //   if(cut === 'Brisket') {
  //     continue;
  //   }
  // });

  // for (const index in cuts) {
  //   console.log(cuts[index]);
  // }

  for (const cut of cuts) {
    if(cut === 'Brisket') {
      continue;             // continue
    }
    console.log(cut);
  }
  
  

  </script>
  
 ``` 
  
  
  
  
