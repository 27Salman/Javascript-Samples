//second largest
const array=[10, 30, 20, 50, 40];
const secondLarge= [...new Set(array)].sort((a,b)=>b-a);
console.log(secondLarge[1]);