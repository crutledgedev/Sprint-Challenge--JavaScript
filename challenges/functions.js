// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(arg1, arg2, cb){
  return cb(arg1, arg2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (num1, num2) =>{
  return num1 + num2;
}
//console.log(consume(12, 12, add));

const multiply = (num1, num2) =>{
  return num1 * num2;
}

//console.log(consume(12, 12, multiply));

const greeting = (name1, name2) =>{
  return `Hello ${name1} ${name2}, nice to meet you!`;
}
//console.log(consume("Allie", "Robinson", greeting));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
//because of lexical scope of where the variables were created within the object. A child element nested inside of an object, can access variables within the parent element because it is created within the lexical scope of the parent. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
