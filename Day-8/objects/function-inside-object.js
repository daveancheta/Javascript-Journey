// Use a function inside an object.

const person = {fullname: "Heaven Dave Ancheta", age: 19, job: "Full-Stack Developer"};

function myObject () {
    return document.getElementById("employeeDetails").innerHTML = "Employee:" + "<br>" + "Fullname:" + person.fullname;
}