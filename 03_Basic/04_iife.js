// Immediately Invoked Function Expression (IIFE)

(function chai () {
    // Named IIFE
    console.log (`DB CONNECTED`)
}) ();  
// when we call two iife then we have to add semicolon at the end of the first iife


( (name) => {
    // without named iife
    console.log (`DB CONNECTED TWO ${name}`)
} )('aman')