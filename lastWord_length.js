// Length of last word

let str = " I am genius  ";

var lengthOfLastWord = function(s){
    const a = s.trim().split(" ").pop().length;
    return a;
};
console.log(lengthOfLastWord(str));