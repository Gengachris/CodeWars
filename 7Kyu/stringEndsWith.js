function solution(str,ending){
let i = ending.length;
if(str.slice(-i) === ending){
return true;
}
else if(ending === ''){
  return true;
}
else if(str === ''){
  return false;
}
else{
    return false;
}
}