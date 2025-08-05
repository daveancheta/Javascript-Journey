function myMultiplication (n1,  n2) {
    if ( n2 === undefined)
    {
        n2 = 5
    }
    return n1 * n2
}

let multiplication = myMultiplication(5);

console.log("Result:", multiplication); // Output: Result: 25