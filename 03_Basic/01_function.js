// console.log ("A")
// console.log ("M")
// console.log ("A")
// console.log ("N")

// function saymyname() {
//     console.log("A")
//     console.log("M")
//     console.log("A")
//     console.log("N")
// }

// saymyname()

// function addTwoNumber (num1, num2) { // parameter
//     console.log(num1 + num2) 
// }

// function addTwoNumber(num1, num2) { // parameter
    // let result = num1 + num2
    // return result
    // console.log("aman");  // After return type nothing will execute
    // return num1 + num2
// }

// const result = addTwoNumber(3, 5) // Agrument

// console.log("Result : ", result)

// function loginUserMessage(username = "sam") {  // Default username
//     if (!username) {
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("aman"))

// console.log(loginUserMessage("aman"));  // undefined

// Rest operator
function calculateCartPrize(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrize(200, 400, 300, 848, 47))

const user = {
    username: "aman",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "aman",
    price: 399
})

const myNewArray = [200, 300, 400, 5000]

function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 4000]));

