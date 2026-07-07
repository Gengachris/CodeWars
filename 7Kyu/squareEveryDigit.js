function squareDigits(num){
    let arr= num.toString().split('');
    let result = arr.map((number)=> number * number);
    return Number(result.join(''));
    
}
​
 console.log(squareDigits(123));
 console.log(squareDigits(765));