/*
Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

last(5)                 =>  5
last([1, 2, 3, 4])      =>  4
last("xyz")             => "z"
last(1, 2, 3, 4)        =>  4
last([1, 2], [3, 4])    =>  [3, 4]
last([[1, 2], [3, 4]])  =>  [3, 4]
*/

// function last(...value){
//     switch(true){
//         case typeof value === 'number':
//             return Number(value.toString().slice(-1));
//         case typeof value === 'string': 
//             return value.slice(-1);  
//         case Array.isArray(value):
//             return value.slice(-1).toString().split(',');    

//         default:
//             return null;    
//     }
// }




function last(...value){
    if(value.length > 1){
            const lastArg = value[value.length - 1];
            if(Array.isArray(lastArg)){
                return lastArg;
        }
    return lastArg;
    }

    const singleValue = value[0];
    switch(true){
        case typeof singleValue === 'number':
            return Number(singleValue.toString().slice(-1));
        case typeof singleValue === 'string':
            return singleValue.slice(-1);
        case Array.isArray(singleValue):
            return singleValue[singleValue.length -1] 
        default:
            return null;           
    }

}




//console.log(last(5));
//console.log(last("xyz"));
//console.log(last(1, 2, 3, 4));
//console.log(last([1,2,3,4]));
//console.log(last([1, 2], [3, 4]));
console.log(last([[1, 2], [3, 4]]));


//let res = (1,2,3,4,5);
// let neRes =  Array.from(res)
// console.log(neRes);
// //console.log(typeof res);