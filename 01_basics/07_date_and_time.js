// ************************** Dates *************************

let myDate = new Date()
console.log(myDate.toString()); // Fri Jul 11 2025 15:23:05 GMT+0000
console.log(myDate.toDateString()); // Fri Jul 11 2025
console.log(myDate.toLocaleString()); // 7/11/2025, 3:23:05 PM
console.log(typeof myDate); // object

let myCreateDate = new Date(2025, 0, 23) // 0 called January
console.log(myCreateDate.toDateString()); // Thu Jan 23 2025

let myCreatedDate = new Date(2025, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()); // 1/23/2025, 5:03:00 AM

let myCreatadeDate = new Date("01-14-2025")

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1752248269642(miliSecond)
console.log(myCreatadeDate.getTime()); // 1736812800000
console.log(Math.floor(Date.now()/1000)); // 1752248269(second)

let newDate = new Date()
console.log(newDate); // 2025-07-11T15:37:00.086Z
console.log(newDate.getMonth() + 1); // 7(July)
console.log(newDate.getDay()); // 5(Friday)


newDate.toLocaleString('default',{
    weekday: "long",
    
})







