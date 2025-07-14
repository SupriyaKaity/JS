function sayMyName(){
console.log("S");
console.log("U");
console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
}
//sayMyName()

function addTwoNumber(number1, number2){
    // console.log(number1 + number2);

    // let result = number1 + number2
    // return result // function er return er por kono kichu print hobe na

    return number1 + number2
}
addTwoNumber(3, 4) // 7
addTwoNumber(3, "4") // 34
addTwoNumber(3, "a") // 3a

const result = addTwoNumber(3, 5)
console.log("Result:", result);


function loginUserMessage(username){
    if(!username){ // if(username === undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("supriya"));



function calcualateCartPrice (val1, val2, ...num1){
return num1
}
//console.log(calcualateCartPrice(200, 300, 400));

 const user = { 
    username: "hitesh",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

//  handleObject(user)

handleObject({
    username: "supriya",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // 400
