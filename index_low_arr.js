// 1.Find the frequency of each element in an array
// const arr = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7, 8, 9]; 

// function findFrequency(arr) {
//     const freq={};
//     for(let num of arr){
//         freq[num]=(freq[num]||0)+1
//     }
//     return freq
// }
// console.log(findFrequency(arr));

// 2.Remove duplicates from an array (without using Set)

// function duplicates(arr){
// let newArr=[];
// arr.forEach(element => {
//     if(newArr.includes(element)){
//         return;
//     }else{
//         newArr.push(element)
//     }
// });
// return newArr
// using Set method
// let newArr=[...new Set(arr)]
// return newArr;
// }
// const arr = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7, 8, 9];
// console.log(duplicates(arr));

// 3.Find the maximum and minimum in an array
// const arr = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7, 8, 9];
// let max=arr[0];
// let min=arr[0];
// function findMaxMin(arr){
    // max=Math.max(...arr);
    // min=Math.min(...arr);
//    let newArr= arr.sort((a,b)=>a-b);
//     max=newArr[arr.length-1]
//     min=newArr[0]

//  for(let i=0; i<arr.length; i++){
//      if(arr[i]>max){
//         max=arr[i]
//      }
//      if(arr[i]<min){
//         min=arr[i]
//      }
//     }
// }
// findMaxMin(arr)  

// console.log("Max",max);
// console.log("Min",min);