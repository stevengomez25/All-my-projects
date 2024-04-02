let username = "Steven_gomez"
let age = 30
let StevenHobbies = false
let points = [10,20,30]
let user = {
    name: 'ryan',
    lastname: 'John',
}
const PI = 3.1415

console.log(username)
console.log(age)
console.log(StevenHobbies)
console.log(points)
console.log(user)
console.log(PI)

if (age >= 18){
    console.log("You are an adult")
}
else if (age>=13){
    console.log("You are a teenager")
}
else {
    console.log("You are a child")
}

const names = ["pedro","Juan","Ramiro","Julian"]

// for( let i = 0; i < names.length; i++ ){
//     console.log(names[i]);
// }

const showUserInfo = (username, userAge) =>
  `The username is ${username}, the user is ${userAge} years old`;

console.log(showUserInfo("Joe", 30));
console.log(showUserInfo("Maria", 44));
