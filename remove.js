//remove dup without set
const newOne=[1,2,3,4,3,2,4,5,6,7,8];
const removeDup=newOne.filter((item,index)=> newOne.indexOf(item)===index);
console.log(removeDup);