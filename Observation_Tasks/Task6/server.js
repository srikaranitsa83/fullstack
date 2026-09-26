const express = require("express");

const app = express();

// Middleware for logging incoming requests
function logger(req, res, next) {
    const time = new Date().toLocaleString();

    console.log(
        `${time} - ${req.method} ${req.url}`
    );

    // Move to the next middleware or route
    next();
}

// Use the logging middleware for all requests
app.use(logger);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Express.js application!");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

// Students route
app.get("/students", (req, res) => {
    res.send("Students page");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

