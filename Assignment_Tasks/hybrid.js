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

class Cat extends Animal {
    meow() {
        console.log("Cat meows");
    }
}

let puppy = new Puppy();
let cat = new Cat();

puppy.eat();
puppy.bark();
puppy.play();

cat.eat();
cat.meow();
