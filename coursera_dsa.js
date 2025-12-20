//#1.reverse string
//#2.factorial of number
//#3.Find the longest word in a string
//#4.min value from each array in a nested array

//#1
// function revStr(str){
//     let newStr="";
//     for(let i=str.length-1; i>=0; i--){
//         newStr=newStr+str[i];
//     }
//     return newStr;
// }
// console.log(revStr("Hello world"))

//#2
// function factorial(n){
//     let result=1;
//     for(let i=result; i<=n;i++){
//         result=result*i
//     }
//     return result;
// }
// console.log(factorial(9))

//#3
//function longestWord(str){
    //const strArr=str.split(" ");
    // let longest=""
    // for(let char of strArr){
    //     if(char.length>longest.length){
    //         longest=char
    //     }
    // }
    // return longest;
    
   // let longest=0;
   // let word="";
    // for(let i=0; i<strArr.length;i++){
    //     if(strArr[i].length>longest){
    //         longest=strArr[i].length;
    //         word=strArr[i]
    //     }
    // }
    // strArr.forEach((item)=>{
    //     if(item.length>longest){
    //         longest=item.length;
    //         word=item;
    //     }
    // })
   // return word;
//}
//console.log(longestWord("find the longest word of a string"));
//#4
// function minValue(arr){
//     let newArr=[];
//     for(let item of arr){
//     let min=Infinity
//       for(let num of item){
//         if(num<min){
//             min=num
//         }
//       }
//          newArr.push(min)
//     }
   
//     return newArr;

// }
function minValue(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
      newArr.push(Math.min(...arr[i]))
    }
    return newArr;
}
const multiarr=[[57,789,67,90],[23,5,1],[3,56,8],[9,67,45,34]]
console.log(minValue(multiarr))