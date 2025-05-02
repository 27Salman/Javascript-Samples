//first word caps
const long="i am wonder new";
const capital=long.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
console.log(capital);