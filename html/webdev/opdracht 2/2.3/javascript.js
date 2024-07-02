function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test the function
console.log(isEvenOrOdd(4));  // Should print "Even"
console.log(isEvenOrOdd(7));  // Should print "Odd"