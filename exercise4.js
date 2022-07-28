/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
let divisible = false;
let number = 1; //We could start from 2520 (smallest from 1 to 10)

while(divisible==false){
  let bool = true;
  for(let i=1;i<=20;i++){
    if (number%i!=0){
      bool=false
    }
  }
  if(bool==true){
    divisible=true;
  }
  else{
    number = number +1;
  }

}

console.log(number)