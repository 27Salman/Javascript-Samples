//longest word
const long="i am wonder new";
const longest=long.split(" ").reduce((longestWord, word)=>{
    return word.length>longestWord.length ? word : longestWord;
    
},"");
console.log(longest);