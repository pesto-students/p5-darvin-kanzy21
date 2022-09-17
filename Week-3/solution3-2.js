//! bind, call, apply; all attach this into function (or object) and the difference is in the function invocation

// bind()

var person = {  
    name: "Shreyas",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
person.hello("world");  // output: "Shreyas says hello world"
var helloFunc = person.hello.bind({ name: "Darvin" });  //bind attaches this into function and it needs to be invoked separately
helloFunc("world");  // output: Darvin says hello world"


//------------------------------------------------------------------//

//call()

var animal = {  
    name: "Bolt",
    hello: function(thing) {
      console.log(this.name + " is a " + thing);
    }
  }
  
  animal.hello("dog");  // output: "Bolt is a dog"
  animal.hello.call({ name: "Kitty" }, "cat"); // output: "Kitty is a cat" 
  //call attaches this into function and executes the function immediately


//------------------------------------------------------------------//

//apply()

function billionaireContainer() {
    var billionaire = {  
       name: "Jeff bezos",
       hello: function() {
         console.log(this.name + " says hello " + arguments[1]);
       }
    }
    billionaire.hello.apply(billionaire, arguments);
  }
  billionaireContainer("world", "mars"); // output: "Jeff bezos says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"      
  
  //apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time