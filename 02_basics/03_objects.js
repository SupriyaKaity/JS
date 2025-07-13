// singleton

// object literals
Object.create

const mySym = Symbol("key1")


const jsUser = {
    name: "Supriya",
    "full name": "Supriya Kaity",
    [mySym]: "myKey1",
    age: 18,
    location: "Burdwan",
    email: "supriya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email); // supriya@google.com
console.log(jsUser["email"]); // supriya@google.com
console.log(jsUser["full name"]); // Supriya Kaity
console.log(jsUser[mySym]); // myKey1


jsUser.email = "supriya@chatgpt.com"
// jsUser.freeze(jsUser)
jsUser.email = "supriya@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting()); // Hello js user
console.log(jsUser.greetingTwo()); // Hello js user, Supriya
