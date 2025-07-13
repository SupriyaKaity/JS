//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "supriya@gmail.com",
    fullname: {
        userfullname: {
            firstname: "supriya",
            lastname: "kaity"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname); // supriya


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "s@gmail.com",
    }
]

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged')); // false



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "supriya"
}
//course.courseInstructor

const {courseInstructor: instructor} = course // de-structure
// console.log(courseInstructor);
console.log(instructor); // supriya


// {
//     "name": "supriya",
//     "coursename": "js in hindi",
//     "price": "free"
// }
