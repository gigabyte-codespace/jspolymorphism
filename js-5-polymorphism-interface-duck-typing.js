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