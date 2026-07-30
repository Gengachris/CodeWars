function isOpposite(s1,s2){
  let s1Count = s1.length;
  let s2Count = s2.length; 
  
   if ((s1Count === 0)  && (s2Count === 0)){
    return false;
  }
  
  let s2Aee = s2.split('')
  .map(char2 =>  char2 === char2.toUpperCase() ? char2.toLowerCase() : char2.toUpperCase()).join('');
  if(s1 === s2Aee){
    return true;
  }
 
  else return false;
  
}