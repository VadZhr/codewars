var solution = function(firstArray, secondArray) {
    let sum=0;
    firstArray.map((el,index)=>{
       return (el-secondArray[index])**2
     }).forEach(el=>sum+=el);
    return sum/firstArray.length
    
  }
