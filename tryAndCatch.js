// Try and Catch statement 1

try {
    throw new ReferenceError ();
}
catch (err) {
    console.log (err);
    console.log ("There was a reference error");
}
console.log ("My program does not stop");


// Try and Catch statement 2

try {
    console.log (a + b);
} 
catch (err) {
    console.log (err);
    console.log ("There was an error");
    console.log ("The error was saved in the error log");
}
console.log ("My program does not stop");