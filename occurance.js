//occurance of each values
const fruits=["apple", "banana", "apple", "banana", "grapes", "grapes", "orange"];
const fruitNum=fruits.reduce((acc,fruits)=>{
    acc[fruits]= (acc[fruits]||0)+1;
    return acc;
},{});
console.log(fruitNum);