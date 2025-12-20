//fibonacci series array upto n numbers
//selected checkbox count get on button click

function fibonacciNum(n) {
  const series = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    series.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return series;
}
console.log(fibonacciNum(10))

//Q:- weathere the given number is fibonacci or not

// function isFibonacci(n) {
//   if (n < 0) return false;
//   if (n === 0 || n === 1) return true;
//   let a = 0,
//     b = 1;
//   while (b < n) {
//     const next = a + b;
//     a = b;
//     b = next;
//   }
//   return b === n;
// }
// console.log(isFibonacci(13));
// function checkPerfectSq(n){
//   return Math.sqrt(n)%1===0
// }
// function checkFibonacci(n){
//   if(n<0) false
//   let a=5*n*n+4;
//   let b=5*n*n-4;
//   return (checkPerfectSq(a)||checkPerfectSq(b))
// }
// console.log(checkFibonacci(34))