function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;
  let n = classPoints.length;
  let avg = 0;
  for(let i =0;i<n;i++){
    sum+=classPoints[i];
  }
  
  avg = sum/n;
  if(yourPoints > avg){
    return true;
  }
  else {
    return false;
  }
​
}