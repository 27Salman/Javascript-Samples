//second largest
const nums=[2,33,43,22,11,4,5];
const result=[...new Set(nums)].sort((a,b)=> b-a);
console.log(result[1]);