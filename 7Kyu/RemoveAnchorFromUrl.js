function removeUrlAnchor(url){
    return url.replace('#'," ").split(" ").slice(0,1).toString();
  
    
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));


// test cases: "www.codewars.com#about" --> "www.codewars.com"