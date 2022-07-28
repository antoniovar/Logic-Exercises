/*
Given a number, display its fibonacci series.
The Fibonacci series is an order of numbers where each number is the sum of the previous two.
*/

const quantity = parseInt(prompt('How many values do you want to get?'));
var series = [];

for(let i=0;i<quantity;i++){
  if(i==0) {
    series.push(0)
  }
  else if(i==1){
    series.push(1)
  }
  else{
    let lastValue = series[i-2]
    let actualValue = series[i-1]
    series.push(lastValue+actualValue)
  }
}

console.log("Complete serie: " + series)
console.log("Result: " + series[quantity-1])
