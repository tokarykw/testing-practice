// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum (num1, num2){

  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;

  var $result= num1+num2
  return $result
}

function difference (num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1-num2
  return $result
}

function product(num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1*num2
  return $result
}

function quotient(num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1/num2
  return $result
}

function exponent(num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1**num2
  return $result
}

function calc(operation, num1, num2) {
  if (operation === 'add') return sum(num1, num2);
  if (operation === 'subtract') return difference (num1, num2);
  if (operation === 'multiply') return product (num1, num2);
  if (operation === 'divide') return quotient (num1, num2);
  if (operation === 'exponent') return exponent (num1, num2); 
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
  var result = calc('subtract', 20, 10);
  if (result !== 10) throw new Error('Expected calc("subtract", 20, 10) to be 10. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.
  var result = calc('multiply', 9, 9);
  if (result !== 81) throw new Error('Expected calc("multiply", 9, 9) to be 81. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
  var result = calc('divide', 9, 3);
  if (result !== 3) throw new Error('Expected calc("divide", 9, 3) to be 3. Received: ' + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.
  var result = calc('exponent', 2, 8);
  if (result !== 64) throw new Error('Operation not supported.');
  
  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
