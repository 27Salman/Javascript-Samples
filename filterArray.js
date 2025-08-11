// Filter Elements from Array

let arr = [1,2,3,4,5];
let fn = function firstIndex(n, i) { return i === 0; }

var filter = function(arr, fn) {
    let arr1 = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(fn(arr[i],i)){
            arr1.push(arr[i]);
        }
    }return arr1;
};