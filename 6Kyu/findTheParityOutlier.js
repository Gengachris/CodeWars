function findOutlier(integers){
   return integers.filter(con => con % 2 ===0 ).length > 1 ? Number(integers.filter(con => con % 2 !== 0)) : Number(integers.filter(con => con % 2 ===0 ));
}
​
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));