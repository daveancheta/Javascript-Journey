// Make a form and log submitted data

function submitButton() {
    let fname = document.getElementById("first_name").value;
    let mname = document.getElementById("middle_name").value;
    let sname = document.getElementById("surname").value;
    
    document.getElementById("submittedContainer").classList.remove("hidden");
    document.getElementById("fname").innerHTML = fname;
    document.getElementById("mname").innerHTML = mname;
    document.getElementById("sname").innerHTML = sname;
}