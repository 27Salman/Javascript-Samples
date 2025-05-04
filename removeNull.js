//removing null,fasle etc
const arr=[0,1,false,2,"",3,null, "hello"];
const newArr=arr.filter(Boolean);
console.log(newArr);