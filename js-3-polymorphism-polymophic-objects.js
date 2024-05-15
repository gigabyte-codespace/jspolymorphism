//  polymorphic objects

const circle = {
    radius: 5,
    calculateArea: function() {
        return Math.PI * this.radius * this.radius;
    }
};

const square = {
    side: 4,
    calculateArea: function() {
        return this.side * this.side;
    }
};

function printArea(shape) {
    console.log(`The area is: ${shape.calculateArea()}`);
}

printArea(circle); // Outputs the area of the circle
printArea(square); // Outputs the area of the square