function removeDup(str){
  let newStr=str.split("");
  let freq={}
  let nonRepeated=[]
  for(let char of newStr){
    freq[char]=(freq[char]||0)+1
  }
  for(let [item,count] of Object.entries(freq) ){
    if(count===1){
      nonRepeated.push(item)
    }
  }
  let newStr1=nonRepeated.join(" ")
  return newStr1;
}
console.log(removeDup("hello world")); // hello world => he wrd