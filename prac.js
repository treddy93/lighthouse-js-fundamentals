function calculateRectangleArea(length, width) {
  return length * width
     if ((length * width) < 0) {
      return "Undefined"
     }
    }


function calculateTriangleArea(base, height) {
  return ((base * height)/2)
}

function calculateCircleArea(radius) {
  return (Math.pow(radius, 2)) * (Math.PI)
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));
