// if-else statement used to check whether the person passed or fail

// var result = 50;                                    // Declaration + Initialisation of the variable 
// if (result > 40) {                                  // Check the condition 
//     console.log ("Congratulation! You are passed");  // if condition satisfy then if condition statement run
// } else{                                             // else this condition run in the terminal
//     console.log ("Unfortunately you didn't pass");
// }

// var food = 'hot';
// if (food == 'hot'){
//     console.log("It's too hot ");
// } else if (food == "cold"){
//     console.log("It's too cold");
// } else{
//     console.log("It's right");
// }

// var light = "red";
// if (light == "green") {
//     console.log("Drive");
// } else if (light == "orange") {
//     console.log("Get Ready");
// } else if (light == "red") {
//     console.log("Don't drive");
// } else {
//     console.log("Traffic light is not working");
// }


var light = "red";
switch (light) {
    case "green":
        console.log ("drive");
        break;
    case "orange":
        console.log ("Get ready");    
        break;
    case "red":
        console.log ("Don't drive");    
        break;
    default:
        console.log ("The traffic light is not working");    
        break;
}
