//sum of an array
const numbers = [1,1,2,3,3,40,4,4,5,6,7,8,9,10];
const total=numbers.reduce((acc,curr) => acc+curr,0);
console.log(total);