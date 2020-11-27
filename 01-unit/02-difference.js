// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function difference (num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  
  var $result= num1-num2
  return $result
}


// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the difference of two numbers.
  var result = difference(1, 1);
  if (result !== 0) throw new Error('Expected difference(1, 1) to be 0. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = difference(1, 1, 2, 2, 5);
  if (result !== 0) throw new Error('Expected difference(1, 1, 2, 2, 5) to be 0. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = difference(8);
  if (result !== 8) throw new Error('Expected difference(8) to be 8. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = difference ();
  if (result !== 0) throw new Error('Expected difference() to be 0. Received: ' + result);


  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
