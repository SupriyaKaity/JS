//var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a);
    
}

console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "supriya"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
one()


if (true) {
    const username = "supriya"
    if (username === "supriya"){
        const website = "youtube"
        console.log(username + website); // supriyayoutube
        
    }
    //console.log(website); 
}
//console.log(username);



//************************* interesting *************************

console.log(addone(5));
function addone(num){
    return num + 1
}
// console.log(addone(5));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));