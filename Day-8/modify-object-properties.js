// Add and delete object properties.

const person = {fullname: "Heaven Dave Ancheta", age: 19, job: "Full-Stack Developer"}; // We added in the age.

delete person.age; // And then we delete the person's age in this part, and the output would be undefined.

console.log("Employee:") // Output: Employee:
console.log("Fullname", person.fullname); // Output: Fullname Heaven Dave Ancheta
console.log("Age:", person.age); // Output: Age: undefined
console.log("Job:", person.job); // Output: Job: Full-Stack Developer