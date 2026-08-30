class Animal {
    eat() {
        console.log("Animal eats food");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();
