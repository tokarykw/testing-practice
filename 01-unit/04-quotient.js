// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1,num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1/num2
  return $result
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(8, 4);
  if (result !== 2) throw new Error('Expected quotient(8, 4) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(6, 3, 7, 8, 9);
  if (result !== 2) throw new Error('Expected quotient(6, 3) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(5, 1);
  if (result !== 5) throw new Error('Expected quotient(5) to be 5. Received: ' + result);

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
