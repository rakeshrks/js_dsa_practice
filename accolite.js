//Q1:find max and min from an array
//Q2:Flatten array upto given level
//hoisting example 
//closure example
//form submission using useRef
//counter app with multiple conditions 
//check the given string is anagram or not 

// const arr=[1,2,[3,4,[5,6,[7,[8,9]]]]]
// function flatArr(arr,level){
//     let newArr=[]
//     arr.forEach((item)=>{
//         if(Array.isArray(item) && level>0){
//           newArr=newArr.concat(flatArr(item,level-1));
//         }else{
//             newArr.push(item);
//         }
//     })
//     return newArr;
// }
// console.log(flatArr(arr,4));
// const arr=[1,2,3,4,2,6,7,9,23,-4,-100]
// function findMaxMin(arr){
//     let min=[0]
//     let max=[1]
//     for(let num of arr){
//         if(num<min){
//             min=num
//         }
//         if(num>max){
//             max=num
//         }
//     }
//     return {min, max}
// }
// console.log(findMaxMin(arr))

//check the given string is anagram or not

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};

  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true