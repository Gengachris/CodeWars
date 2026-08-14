function splitByValue(k,elements){
    let result = [];

    for(let elem of elements){
        if(elem < k){
            result.push(elem);
        }
    }

    for(let elem of elements){
        if(elem >= k){
            result.push(elem);
        }
        
    }
    return result;
}

