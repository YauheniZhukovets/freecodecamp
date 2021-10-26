function nextInLine(arr, item) {
    // Only change code below this line
      arr.push(item)
      
    return arr.shift();
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [5,6,7,8,9];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));