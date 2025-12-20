//1.Find the frequency of each element in an array
function findFreq(arr){
    const freq={}
    for(let num of arr){
        freq[num]=(freq[num]||0)+1 
    }

 const sortedArr=Object.entries(freq).sort((a,b)=>b[1]-a[1])
 return sortedArr[1]
}

const arr=[1,2,1,2,3,2,3,4,3,4,5,9,6,5,8,7,4,0,3,1,5,6,7,4,2,4,6,7]
console.log(findFreq(arr))


//2.find the third largest string char in an array of string 
function arrStringChal(arrStr){
    let first="",second="",third="";
    for(let str of arrStr){
        if(str.length>first.length){
            [third,second,first]=[second,first,str]
        }else if(str.length>second.length){
            [third,second]=[second,str]
        }else if(str.length>third.length){
            third=str
        } 
    }
    return {first,second,third}
}
const arr1=["abc","bcde","xyzwe","iewfiewgf","jhbdsc","dsibiuiuheiuh"]
console.log(arrStringChal(arr1))


//3.Min Max digit from given number
function minMaxDigit(num,k){
    const str=String(num);
    let min=Infinity;
    let max=-Infinity;
    for (let i=0; i<=str.length-k;i++){
      const sub=Number(str.slice(i,i+k));
      if(sub<min) min=sub
      if(sub>max) max=sub
      
    }
    return {min,max}
}
console.log(minMaxDigit(98573287,3))
console.log(minMaxDigit(12983798327,4))