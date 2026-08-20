// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9

 function multiplicationTable(size){
    
    let table =[];
    for(let i =1;i<=size;i++){
        let row = [];
       for(let j=1;j<=size;j++){
        row.push(i*j);
       } 
       table.push(row);
    }
    return table;
}
console.log(multiplicationTable(2));


// function arry(n){
// let arr=[];
//  for(let i=1;i<=n;i++){
//     arr.push(i);
//  }
//  return arr;
// }

// console.log(arry(3));

