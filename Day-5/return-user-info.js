// Function returning an object with user info.

const person1 = {
    name: "Heaven Dave Ancheta",
    age: 19,
    eyeColor: "Black",
    eyeColor: "Brown"
};

function person(name, age, eyeColor, skinColor) {
    return "Fullname: " + name + "\nAge: " + age; // The function just returns an object with name and age.
}

let personInfo = person(person1.name, person1.age, person1.eyeColor, person1.skinColor);

console.log(personInfo); // Output: Fullname: Heaven Dave Ancheta Age: 19