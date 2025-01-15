const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function () {
        console.log (`${this.username} , welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// output

// aman , welcome to website
// {
//   username: 'aman',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]}

// this keyword never use in function


// function chai() {
//     let username = "aman"
//     console.log (this.username)
// }
// chai ()

// const chai = function () {
//     let username = "aman"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "aman"
    console.log(this);
}

// chai ()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "aman"})


// console.log(addTwo (3, 4));

