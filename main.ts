/**
 * @author Zoe Wrubleski
 * @version 1.0.0
 * @date 2025-11-17
 * @fileoverview This program shows the length, width and height of a cube by using the volume 
 */

// assign variables
let volume: number = 1000

// calculate the side lengths
let answer: number = volume ** (1/3)

// display answer
console.log(
  "The length, width and height of a cube that has a volume of 1000 mm³ is " + answer + " mm."
);

console.log("\nDone.");
