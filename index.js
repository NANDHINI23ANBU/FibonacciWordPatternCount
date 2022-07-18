let f0 = 0;
let f1 = 1;

const fibonacciWordPatternCount = (number, pattern) => {
  if (number < 0 || number > 40) {
    console.log('Input number is out of Range');
  } else {
    for (let i = 2; i <= number; i++) {
      let concatNum = f1 + '' + f0;
      fib = concatNum;
      f0 = f1;
      f1 = concatNum;
    }
    console.log('Fibonacci Number for ' + number + ' is: ' + fib);
  }
  //Replace the Pattern with a static one

  let formatPattern = new RegExp(pattern, 'g');
  formatPattern = fib.replace(formatPattern, '*');
  console.log('Pattern Replaced with *:' + formatPattern);

  //Check for the number of occurance of the Pattern
  let count = 0;
  for (let j = 0; j <= formatPattern.length; j++) {
    if (formatPattern[j] == '*') count++;
  }

  console.log('Number of occurances of the Pattern: ' + count);
};

var number = 40;
var pattern = 1011;
fibonacciWordPatternCount(number, pattern);
