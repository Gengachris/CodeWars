function getCount (str){
    let count =0;
    for(let i =0;i<str.length;i++){
        if((str[i] === 'i') || (str[i] === 'e') || (str[i] === 'u') || (str[i] === 'a') || (str[i] === 'o') ){
            count+=1;
        }
    }
    return  count;
}
​
console.log(getCount("abracadabra"));