/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit 
numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/
function isPalindromic(number){
  number = number.toString();
  const originalNumber = Array.from(number);
  let reverseNumber = []
  for(let i=originalNumber.length-1;i>=0;i--){
    reverseNumber.push(originalNumber[i])
  }
  var palindromic = true;
  for(i=0;i<originalNumber.length;i++ ){
  if (originalNumber[i]!=reverseNumber[i]){
    palindromic=false;
  }
  }
  return palindromic
}

let maxSum = 0;

for(let j=100;j<1000;j++){
  for(let k=100;k<1000;k++){
    let mult = j*k
    if(isPalindromic(mult) & mult>maxSum){
      maxSum=mult;
    }
  }
}


console.log(maxSum)