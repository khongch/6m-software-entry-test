/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
  // Check if both x and y are numeric
    if (typeof x !== "number" || typeof y !== "number") {
        return -1;
    }
    // Sawp is perform using addition and subtraction approach
    x = x + y;
    y = x - y;
    x = x - y;
    // Print the swapped values
    console.log("Swapped values: x = " + x + ", y = " + y);
    return 0;
}

// Task 2: Add code here

module.exports = swap;
