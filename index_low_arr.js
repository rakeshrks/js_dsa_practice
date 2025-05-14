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

// 4.Reverse an array (in-place)
// const arr = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7, 8, 9];

    // Using defined method
    // let newArr=arr.reverse()
    // method 1
    // let reversedArr=[];
    // for(let i=arr.length-1;i>=0;i--){
    //     reversedArr.push(arr[i]) 
    //     console.log(arr[i])
    // }
    // console.log(reversedArr);                                       
   
// 5.Check if two arrays are equal (same elements and order)
// const arr1 = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7, 8, 9];
// const arr2 = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7,9,8];
// function arrayAreEqual(arr1,arr2){
// if(arr1.length !==arr2.length){
//     return "Length of array is not equal."
// }
// for(let i=0; i<arr1.length;i++){
//     if(arr1[i] !== arr2[i]){
//         return "Arrays are not equal in same order."
//     }
    
// }
// return "Arrays are equal"
// }
// console.log(arrayAreEqual(arr1,arr2))

// 6.Find the second largest number in an array
const arr1 = [2, 3, 4, 3, 4, 5, 6, 4, 4, 7, 8, 9];
function secondLargestNumber(arr) {
    let max = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    let secondLargest=arr1[0];
    for(let i=0; i<max ;i++){
        secondLargest=arr[i]
    }
    return secondLargest
}
console.log(secondLargestNumber(arr1));