//fibonacci series array upto n numbers.
//Given number is fibonacci series number or not?
//Find max and min number from an array ?
//Flatten nested array upto n level
//2nd most repeated word from an array;

// function fibonacciNum(n) {
//     const series = [];
//     let a = 0, b = 1;
//     for (let i = 1; i <= n; i++) {
//         series.push(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
//     return series;
// }
// console.log(fibonacciNum(12))

// function isFibonacci(n){
// if(n<0) return false;
// if(n===1||n===0) return true;
// let a=0, b=1;
// while(b<n){
//     const next=a+b;
//     a=b;
//     b=next;
// }
// return b===n;
// }
// console.log(isFibonacci(4));

// function findMaxMin(arr){
//     let min=Infinity;
//     let max=-Infinity;
//     for(let num of arr){
//         if(num<min){
//              min=num;
//         }
//         if(num>max){
//              max =num;
//         }
//     }
//     return {max, min}
// }
// console.log(findMaxMin([2,4,5,6,7,8,4,2,1,0.-23]))

// function flettenArr(arr,level){
//     let newArr=[];
//      arr.forEach((item)=>{
//         if(Array.isArray(item)&& level>0){
//             newArr=newArr.concat(flettenArr(item,level-1))
//         }else{
//             newArr.push(item);
//         }
//      })
//      return newArr
// }
// console.log(flettenArr([1,2,[3,4,[5,6,[2,3]],7],8],2))

// function checkAnnagram(str1,str2){
//     if(str1.length !==str2.length) return false;
//     let freq={};
//     for(let char of str1){
//         freq[char]= (freq[char]||0)+1
//     }
//     for(let char of str2){
//         if(!freq[char]) return false;
//         freq[char]--
//     }
//     return true;
// }
// console.log(checkAnnagram("listenq","silenti"))

// function MostRepeated(arr){
// let freq={}
// for(let word of arr){
//     freq[word]=(freq[word]||0)+1
// }
// const secMostrep=Object.entries(freq).sort((a,b)=>b-a)[1][0]
// return secMostrep
// }
// const arr=["mango","apple","mango","banana","cherry","apple","mango"]
// console.log(MostRepeated(arr))

//2.find the third largest string char in an array of string
function firstSecThirdChar(ArrStr){
//     let first="",second="",third="";
// for(let word of ArrStr){
//     if(word.length > first.length){
//         [third,second,first]=[second,first,word]
//     }else if(word.length > second.length){
//         [third,second]=[second,word]
//     }else if(word.length > third.length){
//         [third]=[word]
//     }
// }
// return {first,second,third}
const sortedCharBy= ArrStr.map((item)=>item.length).sort((a,b)=>b-a)
return sortedCharBy;
}

const arr1=["abc","bcde","xyzwe","iewfiewgf","jhbdsc","dsibiuiuheiuh"]
console.log(firstSecThirdChar(arr1))