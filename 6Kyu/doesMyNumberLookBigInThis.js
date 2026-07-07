function narcissistic(value){
    let strNum = value.toString();
    let arrNum = strNum.split('');
    // let result = arrNum.reduce((a,b) => a * b,1);
    let result = arrNum.map( curr => curr ** strNum.length).reduce((acc,val) => acc + val,0);
    return result === value ? true:false;
   
}
console.log(narcissistic("chris"));