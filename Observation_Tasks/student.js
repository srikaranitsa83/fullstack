// Define a class
class Student {

    // Constructor initializes object properties
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method to display student details
    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
        console.log("-------------------");
    }
}

// Create multiple objects from the Student class
let student1 = new Student("Rahul", 20, "JavaScript");
let student2 = new Student("Priya", 21, "Python");
let student3 = new Student("Arun", 19, "Java");

// Call the common method for each object
student1.displayDetails();
student2.displayDetails();
student3.displayDetails();