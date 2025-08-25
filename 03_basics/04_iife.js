// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // need to close this function 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('supriya')