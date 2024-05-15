class Shape {
    constructor(color) {
        this.color = color;
    }

    // A method to calculate the area
    calculateArea() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // Method overriding to calculate the area of a circle
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    // Method overriding to calculate the area of a square
    calculateArea() {
        return this.side ** 2;
    }
}

const circle = new Circle("red", 5);
const square = new Square("blue", 4);

console.log(circle.calculateArea());
// Outputs the area of the circle
console.log(square.calculateArea());
// Outputs the area of the square        