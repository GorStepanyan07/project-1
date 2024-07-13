const fruits = ["lime", "apple", "mango","orange"]
console.log(fruits[0]);
console.log(fruits[2]);

const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers[5]);
console.log(numbers[7]);

const user = {
    name: "Vardan",
    lastName: "Petrosyan", 
    age: 33,
    isMarried: true,
}
console.log(user.lastName);
console.log(user.age);

const dog = {
    color:"black",
    age:2,
    breed: "Doberman",
    name:"Klaus",
}
console.log(dog.color);
console.log(dog.name);

const userName = prompt("Hello what is your name?");
const userAge = prompt(" how old are you");
const userHobby = prompt("do you have a hobby");
const userSport = prompt("do you have a favorite sport");
alert(`Your name is ${userName}, you are ${userAge} years old, your hobby is ${userHobby}, your favorite sport ${userSport}․`);