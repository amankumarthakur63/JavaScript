// console.log ("A")
// console.log ("M")
// console.log ("A")
// console.log ("N")

function saymyname() {
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("N")
}

// saymyname()

// function addTwoNumber (num1, num2) { // parameter
//     console.log(num1 + num2) 
// }

function addTwoNumber(num1, num2) { // parameter
    // let result = num1 + num2
    // return result
    // console.log("aman");  // After return type nothing will execute
    return num1 + num2
}

const result = addTwoNumber(3, 5) // Agrument

// console.log("Result : ", result)

function loginUserMessage(username = "sam") {  // Default username
    if (!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aman"))

console.log(loginUserMessage("aman"));  // undefined


