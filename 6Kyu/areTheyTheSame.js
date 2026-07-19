function comp(array1,array2){
  if(!array1 || !array2){
    return false;
  }
  if(array1.length !== array2.length){
    return false;
  }
  
   let arr2Sorted = array2.sort((a,b) => a-b);
   let arr1SortedSqr = array1.map(num => num * num).sort((a,b)=> a-b);
   return arr2Sorted.every((value,index) => value === arr1SortedSqr[index]);

}



console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 36100, 25921, 361, 20736, 361]));

//console.log(comp([121, 144, 19, 161, 19, 144, 19, 11]));

//console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121,14641, 20736, 361, 25921, 361, 20736, 361]));