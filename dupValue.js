//print duplicate values
const numbers = [1,1,2,3,3,40,4,4,5,6,7,8,9,10];
const viewDuplicates=numbers.filter((item,index)=>numbers.indexOf(item)!==index);
console.log(viewDuplicates);