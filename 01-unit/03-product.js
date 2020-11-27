// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1*num2
  return $result
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 3);
  if (result !== 6) throw new Error('Expected product(2, 3) to be 6. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(0, 3);
  if (result !== 0) throw new Error('Expected product(0, 3) to be 0. Received: ' + result);
  
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
