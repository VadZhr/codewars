function longestSlideDown(pyramid) {
  const sliders = [pyramid[0][0],];
  let variants = [];
  const maxs = [];
  let answer = 0;
  let target = null;
  //   нельзя, чтобы carTar>target
  let carTar = 0;
  for (let i = 0; i < pyramid.length; i++) {
    maxs.push([
      Math.max(...pyramid[i]),
      pyramid[i].indexOf(Math.max(...pyramid[i])),
      i,
    ]);
  }
  //   for(let i=0;i<maxs.length;i++){
  //     if(maxs[0]){

  //     }
  //   }
  maxs.sort((a, b) => {
    return a[0] - b[0];
  });
  target = [maxs[maxs.length - 1][2], maxs[maxs.length - 1][1]];
  console.log(target);
  for(let i=1;i<pyramid.length;i++){
    variants=[]
    for(let j=0;j<pyramid[i].length;j++){

        variants.push(pyramid[i][j]+sliders[i-1])
        // НАДО ПОНЯТЬ, КАК НАЙТИ ПРАВИЛЬНЫЙ ПУТЬ!!!
        if(i<=target[0]&&j<=target[1]){
            sliders.push(pyramid[i][target[1]])
            break
        }
        // console.log(variants);
        if((j==target[1]&&i==target[0]||j==pyramid[i].length-1)||carTar<j){
            console.log(variants.indexOf(Math.max(...variants)));
            
            sliders.push(pyramid[i][variants.indexOf(Math.max(...variants))])
            carTar=variants.indexOf(Math.max(...variants));
  
            break
        }
        
    }
  }
  return sliders;
}

console.log(longestSlideDown([
    [3], 
    [7, 4], 
    [2, 4, 100], 
    [8, 1, 1000, 10000]]));
