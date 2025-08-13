// Use spread and rest operators.

const firstGroup = [1, 2, 3, 4, 5,]; // Output: [1, 2, 3, 4, 5,]
const secondGroup = [6, 7, 8, 9, 10]; // Output: [6, 7, 8, 9, 10]

const groupCombined = [...firstGroup, ...secondGroup]; // Output: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

console.log(groupCombined);