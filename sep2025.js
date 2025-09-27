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