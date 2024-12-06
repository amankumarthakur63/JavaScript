// singleton 

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Aman",
    "full name": "Aman Kumar Thakur Ji",
    [mySym]: "mykey1",
    age: 14,
    location: "Jalandhar",
    email: "amanKumar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name)
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "aman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aman@microsoft.com"
console.log(JsUser)


JsUser.greeting = function () {
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// Output

// {
//     name: 'Aman',
//     'full name': 'Aman Kumar Thakur Ji',
//     age: 14,
//     location: 'Jalandhar',
//     email: 'aman@microsoft.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(Key1)]: 'mykey1'
//   }
//   Hello JsUser
//   undefined
//   Hello JsUser, Aman
//   undefined