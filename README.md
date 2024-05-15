# **Overview**

**Polymorphism** is a concept in object-oriented programming that allows the same function to be used in different forms.
**Polymorphism** is achieved through 
- **dynamic typing allowing variables and functions**to adapt to different data types.

## **1. Dynamic typing**

Dynamic typing is a fundamental concept in programming languages like JavaScript. It refers to the ability of a variable to change its data type during runtime. In dynamically typed languages, the data type of a variable is determined and assigned at runtime, rather than being explicitly declared in the code. Here's an explanation of dynamic typing in JavaScript:

### Definition:

*   Dynamic typing, also known as "duck typing," allows variables to hold values of different data types, and these data types can change during the execution of a program.
*   It is a characteristic of dynamically typed languages like JavaScript, Python, and Ruby, where variable types are determined at runtime.


### Key Characteristics:

*   Variables in dynamically typed languages are not bound to a specific data type when declared.
*   The data type of a variable can change based on the type of value assigned to it.
*   Dynamic typing provides flexibility but can also lead to runtime errors if types are not handled carefully.


### Example:

Let's look at an example in JavaScript where a variable changes its data type during runtime:
```javascript
let x;
x = 5;      // Now, x is a number
console.log(x); // Outputs 5 (a number)

x = "hello"; // Now, x is a string
console.log(x); // Outputs "hello" (a string)    
```

## **2. Polymorphic Functions:**

Polymorphic functions in JavaScript are functions that can accept arguments of different types and adapt their behavior based on the actual types of the arguments. This flexibility allows the same function to work with various data types, promoting code reusability and versatility. Here's a detailed explanation of polymorphic functions in JavaScript:

### Definition:

*   Polymorphic functions are functions that exhibit different behaviors depending on the data types of their input arguments.
*   They allow you to write functions that can accept a variety of data types and perform operations specific to each type.

### Key Characteristics:

*   Polymorphic functions adapt their operations to the actual data type of the arguments.
*   They promote code reuse by allowing a single function to handle diverse input scenarios.
*   JavaScript's dynamic typing system is a fundamental aspect of polymorphic functions, as it enables the automatic type conversion and flexibility required for polymorphism.


### Example:

Let's create a simple polymorphic function that calculates the area of geometric shapes. This function can accept different types of shapes (e.g., circles and squares) and return their respective areas.
```javascript
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
```

In this example, the calculateArea function accepts different types of shapes represented by objects. It checks the type property of each shape to determine its type and calculates the area accordingly. The same function works with circles and squares, showcasing polymorphism.

## **3. Polymorphic Objects:**

Polymorphic objects in JavaScript refer to objects that share a common interface, even when they are of different types or have different implementations. This concept enables objects to respond to the same set of methods or properties, promoting code uniformity and reusability. Here's a detailed explanation of polymorphic objects in JavaScript:

### Definition:

*   Polymorphic objects are objects of different types that share a common interface, typically in the form of methods or properties.
*   They allow for code that works with a variety of objects as long as they adhere to the specified interface.


### Key Characteristics:

*   Polymorphic objects implement a shared interface, making them interchangeable in code that expects that interface.
*   They enable the creation of code that is more versatile and easier to maintain since it can be applied to various objects with consistent behavior.
*   Polymorphism can be achieved through object composition and adherence to a common interface.


### Example:

Let's create a polymorphic scenario using two different shapes (a circle and a square) that respond to a common method, such as calculateArea.

```javascript
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
```

In this example, both the circle and square objects have a calculateArea method, which makes them polymorphic in the context of the printArea function. This function can work with any object that provides a calculateArea method, regardless of the object's actual type.

## **4. Inheritance and Method Overriding:**

Inheritance and method overriding are fundamental concepts in object-oriented programming (OOP) that enable the creation of hierarchical structures and the customization of behavior in derived classes. These concepts are supported in JavaScript, allowing you to build class hierarchies and override methods in child classes. Here's an explanation of inheritance and method overriding in JavaScript:

### Inheritance:

*   **Definition:** Inheritance is a mechanism in OOP where a new class (child or derived class) can inherit properties and methods from an existing class (parent or base class).
*   **Key Characteristics:** In JavaScript, classes can inherit from other classes through the extends keyword.The child class inherits the properties and methods of the parent class, which promotes code reuse and structure.


### Method Overriding:

*   **Definition:** Method overriding is the ability of a derived class to provide a specific implementation of a method that is already defined in the parent class.
*   **Key Characteristics:** When a method is overridden, the derived class's implementation takes precedence over the parent class's implementation.
*   Method overriding allows for customizing behavior in a child class while maintaining the same method signature.


### Example:

Let's illustrate inheritance and method overriding in JavaScript with a simple example:

```javascript
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
```

In this example, the Circle and Square classes inherit from the Shape class and override the calculateArea method to provide their own implementations. Method overriding allows each shape to calculate its area differently, while still adhering to the common method signature.

## **5\. Interfaces and Duck Typing:**

Interfaces and duck typing are related concepts in JavaScript that contribute to polymorphism and the flexibility of object-oriented programming. They enable objects to respond to a common set of methods or properties, regardless of their specific types. Here's an explanation of interfaces and duck typing in JavaScript:

### Interfaces:

*   **Definition:** In object-oriented programming, an interface is a contract that specifies a set of methods or properties that a class must implement. It defines a common structure that classes adhere to, ensuring they provide specific behaviors.
*   **Key Characteristics:** Interfaces serve as blueprints for the methods and properties that classes must have.JavaScript does not have explicit interface definitions, but they can be achieved through conventions and code documentation.


### Duck Typing:

*   **Definition:** Duck typing is a concept in dynamically typed languages like JavaScript. It follows the principle "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck." In programming, it means that the suitability of an object is determined by its behavior (methods and properties) rather than its formal type.
*   **Key Characteristics:** Objects are evaluated based on their behavior, not their type.Duck typing allows for flexibility in code, as long as objects respond to the required interface.


### Role in Polymorphism:

*   Interfaces and duck typing are fundamental to achieving polymorphism in JavaScript. By ensuring that objects adhere to a common interface or respond to certain methods, you can treat them uniformly and achieve polymorphic behavior.
*   Duck typing allows objects to be treated as if they belong to a specific type based on their behavior, facilitating polymorphism without strict type checking.


### Example:

Let's illustrate the concept of duck typing and informal interfaces in JavaScript:

```javascript
// An informal interface for objects that can speak
const Speakable = {
    speak: function () {
        // Speakable objects should implement this method
    }
};

function saySomething(speaker) {
    if (speaker.speak) {
        console.log(speaker.speak());
    } else {
        console.log("Object cannot speak.");
    }
}

const dog = {
    speak: function () {
        return "Woof!";
    }
}

const cat = {
    speak: function () {
        return "Meow!";
    }
}

const car = {
    brand: "Toyota"
}

saySomething(dog); // Outputs "Woof!"
saySomething(cat); // Outputs "Meow!"
saySomething(car); // Outputs "Object cannot speak."     
```
In this example, the Speakable interface is an informal definition that objects (e.g., dog and cat) adhere to by providing the speak method. The saySomething function uses duck typing to determine if an object can speak based on its behavior, allowing for polymorphic behavior without strict type checking.

### **Conclusion:**

*   Polymorphism in JavaScript is a key concept that enhances code scalability, reusability, and maintainability. It allows developers to create code that can adapt to different data types and objects through a common interface.
*   By understanding and applying polymorphism, developers can build more versatile and efficient software, making it a cornerstone of modern software development.
