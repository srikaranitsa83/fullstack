class Animal {
    eat() {
        console.log("Animal eats food");
    }
}

let Flyable = {
    fly() {
        console.log("Bird can fly");
    }
};

let Swimmable = {
    swim() {
        console.log("Bird can swim");
    }
};

class Bird extends Animal {}

Object.assign(Bird.prototype, Flyable, Swimmable);

let bird = new Bird();

bird.eat();
bird.fly();
bird.swim();