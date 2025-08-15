// 
function submitButton() {
    const fullname = document.getElementById("fullname").value;
    const age = document.getElementById("age").value;


    localStorage.setItem("fullname", fullname);
    localStorage.setItem("age", age);

    let displayName = localStorage.getItem("fullname");
    let displayAge = localStorage.getItem("age");


    document.getElementById("displaySaveName").innerHTML = displayName;
    document.getElementById("displaySaveAge").innerHTML = displayAge;
}