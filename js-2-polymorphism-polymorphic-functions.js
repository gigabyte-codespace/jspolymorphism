//  polymorphic functions

function calculateArea(shape) {
    if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "square") {
        return shape.side * shape.side;
    } else {
        throw new Error("Unknown shape type");
    }
}

const circle = { type: "circle", radius: 5 };
const square = { type: "square", side: 4 };

console.log(calculateArea(circle));
// Outputs the area of the circle => 78.53981633974483
console.log(calculateArea(square));
// Outputs the area of the square => 16