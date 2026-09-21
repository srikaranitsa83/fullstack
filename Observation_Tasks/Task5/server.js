// Import Express
const express = require("express");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Express.js Student Server!");
});

// Students route
app.get("/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Rahul",
            age: 20,
            course: "Computer Science"
        },
        {
            id: 2,
            name: "Priya",
            age: 21,
            course: "Information Technology"
        },
        {
            id: 3,
            name: "Arjun",
            age: 20,
            course: "Electronics"
        },
        {
            id: 4,
            name: "Sneha",
            age: 22,
            course: "Mechanical Engineering"
        },
        {
            id: 5,
            name: "Kiran",
            age: 21,
            course: "Computer Applications"
        }
    ];

    res.json(students);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Student Server</h1>
        <p>This application is created using Node.js and Express.js.</p>
        <p>It provides student information through different HTTP routes.</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

