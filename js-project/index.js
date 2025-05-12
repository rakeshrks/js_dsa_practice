
// function solve(arr, rotations){ 

//    if(rotations == 0) return arr; 

//    for(let i = 0; i < rotations; i++){ 

//       let element = arr.pop(); 

//       arr.unshift(element); 

//    } 

//    return arr; 

// }

// console.log(solve([44, 1, 22, 111], 1));



// const str="rakeshkumar"
// function checkPelin(str){
// let newstr=str.split("").reverse().join("")
// return newstr
// }
// console.log(checkPelin(str))
// setInterval(()=>{
//   console.log("hello")
// },5000) 





// const arr=[1,2,3,[4,5,[6,7,[45,67]]],8,9]

// function flatArr(arr) {
//   let newArr = []
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//     newArr= newArr.concat(flatArr(item));
//     } else {
//       newArr.push(item);
//     }
//     // console.log(item)
//   });
//   return newArr;
// }
// console.log(flatArr(arr));

// function flattenArray(arr) {
//   let result = [];

//   arr.forEach(element => {
//     if (Array.isArray(element)) {
//       result = result.concat(flattenArray(element));
//     } else {
//       result.push(element);
//     }
//   });

//   return result;
// }

// const nestedArray = [1, 2, 3, [4, 5, [6, 7, [45, 67]]], 8, 9];
// const flattenedArray = flattenArray(nestedArray);

// console.log(flattenedArray);




// const str="hello rakesh kumar";
// console.log(str.split(" "))
// const splitedArr = str.split(" ")
// splitedArr.forEach((item)=>console.log(item.split("").reverse().join("")))

// const reverseWords = (str) => {
//   const splitedArr = str.split(" ");
//   splitedArr.forEach((item) => {
//     return item.split("").reverse().join("");
//   });
// };

// const str = "hello rakesh kumar";
// reverseWords(str);

  
// const a=3;
// const b=new Number(3);
// const c=3;
// console.log(a===c);
// console.log(b);

// const flatArr=(arr)=>{
  // let newArr=[];
  // arr.forEach((item)=>{
    //   if(Array.isArray(item)){
      //     newArr=newArr.concat(flatArr(item))
      //   }else{
        //     newArr.push(item)
        //   }
        // })
        // return newArr
        // }
        // function filterNum(arrr){
          //  let newArr=  arrr.filter((item)=>item%2===1)
          // let newArr=[];
          // arrr.map((item)=>{
            //   if(!newArr.includes(item)){
              //     newArr.push(item)
              //   }
              // })
              // return newArr;
              // }


              

// const arr = [1,2,2,3,3,4,4,5,6,7,8,9];
// function rotateArr(arrr,rotation){
//    if(rotation==0) return arrr;
//    for(let i=0;i<rotation;i++){
//     let ele=arrr.pop()
//     arr.unshift(ele);
//    }
//    return arrr;
// }

// console.log(rotateArr(arr,2));

// function reverseArr(str){
// const str1=str.split(" ");
// const srt2=str1.map((item)=>item.split("").reverse().join("").join(" "));
// return srt2;
// }

// console.log(reverseArr("Hello Rakesh Kumar"));
