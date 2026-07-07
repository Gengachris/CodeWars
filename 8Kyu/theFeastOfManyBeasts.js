function feast(beast, dish) {
//your function here
  let n = beast.length;
  let y = dish.length;
  let first = beast[0];
  let last = beast[n-1];
  let fir = dish[0];
  let las = dish[y-1];
  if((first === fir) && (last === las)){
      return true;
  }
  else{
      return false;
  }
}