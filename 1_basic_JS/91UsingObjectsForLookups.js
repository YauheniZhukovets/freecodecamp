// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    let list = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
  result = list[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");