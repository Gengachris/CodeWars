export function descendingOrder(n: number): number {
 
let result= n.toString().split('').sort((a:any,b:any):any=> b-a);
  let final = Number(result.join(''));
  return final;

}