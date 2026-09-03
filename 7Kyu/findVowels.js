function vowelIndices(word){
  //your code here
  let result = word.split('').map(char => char.toLowerCase()); 
  let newArr= [];
  for(let i=0;i<result.length  ;i++){
    
    if(result[i] === 'o' || result[i] === 'e' || result[i] === 'u' || result[i] === 'a' || result[i] === 'i' || result[i] === 'y'){
        newArr.push(i+1);
    }
  }
   return newArr;
  
}
console.log(vowelIndices('UNkpRGHXVhDBWY'));