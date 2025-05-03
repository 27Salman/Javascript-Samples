//max number in an array
const numbers = [1,1,2,3,3,40,4,4,5,6,7,8,9,10];
const maxNum=numbers.reduce((acc,curr)=> acc>curr ? acc:curr);
console.log(maxNum);