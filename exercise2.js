/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
var list = [];

for(let i=0; i<1000;i++){
  if ((i%3==0 || i%5==0)& i!=0){
    list.push(i)
  }
}
console.log(list)
let total = 0;
for(element of list){
  total = total + element;
}
console.log(total)