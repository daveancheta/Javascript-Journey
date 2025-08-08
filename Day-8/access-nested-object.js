// Access nested object values.

const person =
{
    fullname: "Heaven Dave Ancheta",
    job: {
        firstjob: "Full-Stack Developer",
        secondjob: "Software Developer"
    }
};

console.log("Employment History"); // Output: Employment History
console.log("Fullname:", person.fullname); // Output: Fullname: Heaven Dave Ancheta
console.log("First Job:", person.job.firstjob); // Output: First Job: Full-Stack Developer
console.log("Second Job:", person.job.secondjob); // Output: Second Job: Software Developer