function split(string,mask){
    let totalLength = mask.reduce((acc,curr)=> acc + curr,0);
    if(totalLength !== string.length){
        return null;
    }
    let result = [];
    let currentIndex = 0;
    for(let i=0 ; i < mask.length;i++){
        let length = mask[i];
        let part = string.substring(currentIndex, currentIndex + length);
        result.push(part);
        currentIndex = currentIndex + length;
    }
    return result;
}

// console.log(split("hello",[2,3]));
console.log(split("codewars",[4,4]));


