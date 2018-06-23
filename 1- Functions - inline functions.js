

 var ninja = function myNinja(){
     console.log(ninja == myNinja,
     "This function is named two things at once!");
 };

 ninja();

 console.log(typeof myNinja == "undefined",
 "But myNinja isn't defined outside of the function.");

