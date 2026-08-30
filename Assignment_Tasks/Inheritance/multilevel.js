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

class Puppy extends Dog {
    play() {
        console.log("Puppy plays");
    }
}

let puppy = new Puppy();

puppy.eat();
puppy.bark();
puppy.play();
