const user = {
    userName: "supriya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
        
    }
}
user.welcomeMessage()
user.userName = "soumalya"
user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "supriya"
//     console.log(this.username);
// }
// chai()


// const chai = function chai(){
//     let username = "supriya"
//     console.log(this.username);
// }
// chai()


// const chai() => {
//     let username = "supriya"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4));


const addTwo = (num1, num2) => ({userName: "supriya"})
console.log(addTwo(3, 4));