// function balancedParens(n) {

//   if(n==0){
//     return [""]
//   }
//   if(n==1){
//     return ["()"]
//   }
//     const left = [];
//     const right = [];
//     for(let i=0;i<n-1;i++){
//         left.push({open:'(', index:i})
//         right.push({open:')', index:i+3})
//     } 
    
//   const parentheses = [...left, ...right];
//   const allCombinations = new Set();
//   const a = new Set();

//   let checkIsFitable=(str)=>{
//     let close =0;
//     let open =0;
//   for(let i=0;i<str.length;i++){
//       if(str[i]=='('){
//          open++
//       }
//       if(str[i]==')'){
//           close++
//           if(open-close==-1){
//               return false
//           }
//       }
//       if(i==str.length-1) return true
      
//   }
//   }

// let iter = 1
// let halfIter=1
// for(let i=1;i<=(n-1) * 2;i++){
//   iter*=i
// }
// for(let i=1;i<=n-1;i++){
//   halfIter*=i
// }
// let iters = iter/halfIter**2
// console.log(iters);
//   for (let i = 0; i < iters; i++) {
//     const indexComb = [];
//     for (let j = 0; j < (n-1) * 2; j++) {
//       let index = (Math.random() * (n-1) * 2) | 0;
//       while (indexComb.includes(index)  ) {
//         index = (Math.random() * (n-1) * 2) | 0;
//       }
//       indexComb.push(index);
//     }
//     while (allCombinations.has(['(',...indexComb.map(el=>parentheses[el].open),')'].join(""))) {
//       indexComb.length = 0;
//       for (let j = 0; j < (n-1) * 2; j++) {
//         let index = (Math.random() * (n-1) * 2) | 0;
//         while (indexComb.includes(index) ) {
//           index = (Math.random() * (n-1) * 2) | 0;
//         }
//         indexComb.push(index);
//       }
//     }
//     const variant =['(',...indexComb.map(el=>parentheses[el].open),')'].join("");
//       const reverse =variant.split(' ').reverse().join('')
//       if(!(reverse!=variant)){
//         allCombinations.add(reverse);
//         allCombinations.add(variant);
        
        
//       }else{
//         allCombinations.add(variant);
//       }
//       if([...allCombinations].length==iters){
//         break
//       }
//   }
//   // console.log([...allCombinations].length);
//   return [...allCombinations].filter(checkIsFitable)
// }
function balancedParens(n) {
  const result = [];

  function backtrack(s = '', open = 0, close = 0) {
    console.log(s);
      if (s.length === n * 2) {
          result.push(s);
          return;
      }

      if (open < n) {
     
          backtrack(s + '(', open + 1, close);
      }
      if (close < open) {
       
          backtrack(s + ')', open, close + 1);
      }
  }

  backtrack();
  return result;
}

console.log(balancedParens(3));
