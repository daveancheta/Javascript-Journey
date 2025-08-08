// Loop through object keys and values.


const myObject = 
{
    employee: [
        {name: "John Doe", job: "Full-Stack Developer"},
        {name: "Mark Vane", job: "Software Developer"},
        {name: "Evan Cole", job: "Software Engineering"},
    ]
};

let employeeDetails= "";

for (let i in myObject.employee) {
    employeeDetails += "Name: " + myObject.employee[i].name + "\n";
    employeeDetails += "Job: " + myObject.employee[i].job + "\n" + "\n";
}

console.log(employeeDetails);
