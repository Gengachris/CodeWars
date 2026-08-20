function findAverage(array) {
  // your code here
  let sum = 0;
  let n = array.length;
  if(array.length === 0 ){
    return 0;
  } 
  
  for(let i=0;i<array.length;i++){
    sum = sum+ array[i]
  }
  
  return sum/n;
}