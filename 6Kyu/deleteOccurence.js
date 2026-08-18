function deleteNth(arr,n){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < newArr.length; j++){
            if(newArr[j] === arr[i]){
                count++;
            }
        }
        if(count < n){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(deleteNth([1,2,3,3,4],1));

