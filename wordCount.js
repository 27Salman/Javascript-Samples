//how many times a word appears in a sentence
const words="hello world hello hello"
const wordNum=words.split(" ").reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1;
    return acc;
},{});
console.log(wordNum);