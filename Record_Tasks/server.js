const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    rollNo: String,
    name: String,
    branch: String,
    year: Number,
    marks: Number,
    email: String
});

const Student = mongoose.model("Student", studentSchema);

app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});

app.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(student);
});

app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});