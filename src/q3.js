/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName:"Bobby"
}

// Task 1: 
let dog = {};
dog.breed = "Poodle";

// Task 2:
for(let key in dog) {
    console.log(key + ": " + dog[key]);
