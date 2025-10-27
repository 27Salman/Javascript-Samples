// Sign of the Product of an array
var arraySign = function(nums) {
    let product = 1;
    for(let num of nums){
        product *= num
    }
    if(product>0){
        return 1;
    }else if(product<0){
        return -1;
    }else{
        return 0;
    }
};
console.log(arraySign([1,0,-1,-1,0,0]));