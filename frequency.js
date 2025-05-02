//frequency in a word
const str="Malayali";
const strfreq=str.split("").reduce((acc,word)=>{acc[word]=(acc[word]||0)+1;
    return acc;
},{});
console.log(strfreq);