/*
The sum of the squares of the first ten natural numbers is 385.
The square of the sum of the first ten natural numbers is 3025.
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum 
is 3025-385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. 
*/

let sumSquares=0;
let sumNumbers=0;

for(let i=1;i<=100;i++){
  sumSquares = sumSquares + i*i;
  sumNumbers = sumNumbers+i;
}

let result = sumNumbers*sumNumbers - sumSquares;
console.log(result)

