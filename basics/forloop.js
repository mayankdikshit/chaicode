// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

// for (let i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// };

// for (const fruit of fruits){
//     console.log(fruit)
// }

// console.log(fruit);


const person = {
    firstName : "mayank",
    lastName : "dikshit",
    age : 25,
    city : "meerut"
}

// for(const key in person){
//     console.log(key, ": ", person[key])
// }

// const personKeys = Object.keys(person)
// const personValue = Object.values(person)
// const personEntries = Object.entries(person)

// console.log(personKeys);

// for (const key of personKeys){
//     console.log(person[key]);
// }


for (const key in person){
    console.log(key)
}