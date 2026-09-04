function mergeArrays(arr1,arr2){
  let newArr=[...arr1,...arr2];
  
newArr.sort((a,b) => a-b)
let result = new Set(newArr);
return  res = [...result]
}
console.log(mergeArrays())