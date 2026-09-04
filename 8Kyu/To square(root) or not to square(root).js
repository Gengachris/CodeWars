

let squareOrSquareRoot = (array) =>{
  
    return array.map(elem => Number.isInteger(Math.sqrt(elem)) === true ? Math.sqrt(elem): elem **2)
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));