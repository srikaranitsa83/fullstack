const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        const db = client.db("collegeDB");
        const students = db.collection("students");

        // CREATE
        await students.insertOne({
            rollNo: "23CM001",
            name: "Ravi Kumar",
            branch: "CSE-AIML",
            year: 3,
            marks: 85,
            email: "ravi@example.com"
        });
        console.log("Student inserted");

        // READ
        const data = await students.find().toArray();
        console.log("Students:");
        console.log(data);

        // UPDATE
        await students.updateOne(
            { rollNo: "23CM001" },
            { $set: { marks: 90 } }
        );
        console.log("Student updated");

        // DELETE
        await students.deleteOne({
            rollNo: "23CM001"
        });
        console.log("Student deleted");

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main();