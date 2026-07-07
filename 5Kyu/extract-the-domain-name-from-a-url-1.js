function domainName(url){
  //your code here
  return url.replace(/https?:\/\//,'').replace(/^www./,'').split('.')[0]
}