//removing duplicates
const numbers = [1,1,2,3,3,40,4,4,5,6,7,8,9,10];
const duplicates=[...new Set(numbers)];
console.log(duplicates);