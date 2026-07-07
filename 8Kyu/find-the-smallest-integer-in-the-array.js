function findSmallestInt(arr) {
  //your code here
  let minimum = arr[0];
  for(let i =1;i<arr.length ;i++){
    if(arr[i] < minimum){
      minimum = arr[i];
    }
  }
  
  return minimum;
}