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