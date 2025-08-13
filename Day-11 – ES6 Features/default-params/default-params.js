function submitNumber(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
    
}

document.querySelector("h1").innerHTML = submitNumber (5);
 