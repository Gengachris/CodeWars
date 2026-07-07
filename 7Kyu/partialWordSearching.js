function wordSearch(query, seq){ 
const result = seq.filter(elem => elem.toLowerCase().includes(query.toLowerCase()))
return result.length > 0 ? result : ["Empty"];
}
console.log(wordSearch('muh',['chris','christopher','christine','muhizi']));