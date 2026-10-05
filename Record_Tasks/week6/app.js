const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    { id: 1, name: "Ravi", branch: "CSE" },
    { id: 2, name: "Srikar", branch: "CSE-AIML" }
];

app.get('/', (req, res) => {
    res.send('Student Management Application');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch
    };

    students.push(student);
    res.json(student);
});

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
