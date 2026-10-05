/**
 * app.js
 * Student Information Management System
 * Node.js + MongoDB Driver Implementation
 * Database: collegeDB | Collection: students
 */

const { MongoClient } = require('mongodb');

// Connection URI (defaults to local MongoDB server or env variable)
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log(' Connected to MongoDB: collegeDB');

    const db = client.db('collegeDB');
    const students = db.collection('students');

    // Clean start: reset collection
    await students.deleteMany({});

    // ---------------------------------------------------------
    // 1. Insert at least into the collection
    // ---------------------------------------------------------
    console.log('\n--- 1. Insert Student Records ---');
    const studentList = [
      { rollNo: "23CM001", name: "Ravi Kumar",   branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
      { rollNo: "23CM002", name: "Priya Sharma", branch: "CSE",      year: 2, marks: 92, email: "priya@example.com" },
      { rollNo: "23CM003", name: "Ananya Reddy", branch: "CSE-AIML", year: 3, marks: 78, email: "ananya@example.com" },
      { rollNo: "23CM004", name: "Karthik Varma",branch: "ECE",      year: 1, marks: 45, email: "karthik@example.com" },
      { rollNo: "23CM005", name: "Suresh Raina", branch: "IT",       year: 4, marks: 68, email: "suresh@example.com" },
      { rollNo: "23CM006", name: "Sneha Patel",  branch: "CSE-AIML", year: 2, marks: 48, email: "sneha@example.com" }
    ];
    const insertRes = await students.insertMany(studentList);
    console.log(`Inserted ${insertRes.insertedCount} student documents.`);

    // ---------------------------------------------------------
    // 2. Display all students
    // ---------------------------------------------------------
    console.log('\n--- 2. Display All Students ---');
    const allStudents = await students.find().toArray();
    console.log(allStudents);

    // ---------------------------------------------------------
    // 3. Display students belonging to a particular branch
    // ---------------------------------------------------------
    console.log('\n--- 3. Students in CSE-AIML Branch ---');
    const aimlStudents = await students.find({ branch: "CSE-AIML" }).toArray();
    console.log(aimlStudents);

    // ---------------------------------------------------------
    // 4. Display students who scored more than 75 marks
    // ---------------------------------------------------------
    console.log('\n--- 4. Students with Marks > 75 ---');
    const topScorers = await students.find({ marks: { $gt: 75 } }).toArray();
    console.log(topScorers);

    // ---------------------------------------------------------
    // 5. Search for a student using rollNo
    // ---------------------------------------------------------
    console.log('\n--- 5. Search Student by rollNo (23CM001) ---');
    const student = await students.findOne({ rollNo: "23CM001" });
    console.log(student);

    // ---------------------------------------------------------
    // 6. Search students based on condition (year: 3 and marks >= 80)
    // ---------------------------------------------------------
    console.log('\n--- 6. Search Students (Year: 3 and Marks >= 80) ---');
    const year3Top = await students.find({ year: 3, marks: { $gte: 80 } }).toArray();
    console.log(year3Top);

    // ---------------------------------------------------------
    // 7. Update marks of a particular student
    // ---------------------------------------------------------
    console.log('\n--- 7. Update Marks of 23CM001 to 95 ---');
    await students.updateOne({ rollNo: "23CM001" }, { $set: { marks: 95 } });
    console.log('Updated Record:', await students.findOne({ rollNo: "23CM001" }));

    // ---------------------------------------------------------
    // 8. Update another field such as email or branch
    // ---------------------------------------------------------
    console.log('\n--- 8. Update Email of 23CM002 ---');
    await students.updateOne({ rollNo: "23CM002" }, { $set: { email: "priya.sharma@college.edu" } });
    console.log('Updated Record:', await students.findOne({ rollNo: "23CM002" }));

    // ---------------------------------------------------------
    // 9. Delete a student record using rollNo
    // ---------------------------------------------------------
    console.log('\n--- 9. Delete Student Record (23CM005) ---');
    const delRes = await students.deleteOne({ rollNo: "23CM005" });
    console.log(`Deleted Count: ${delRes.deletedCount}`);
    console.log(`Remaining Count: ${await students.countDocuments()}`);

    // ---------------------------------------------------------
    // 10. Display students in descending order of marks
    // ---------------------------------------------------------
    console.log('\n--- 10. Students in Descending Order of Marks ---');
    const sorted = await students.find().sort({ marks: -1 }).toArray();
    console.log(sorted);

    // ---------------------------------------------------------
    // 11. Create an index on rollNo
    // ---------------------------------------------------------
    console.log('\n--- 11. Create Index on rollNo ---');
    const idxName = await students.createIndex({ rollNo: 1 }, { unique: true });
    console.log(`Created index: ${idxName}`);
    console.log('All Indexes:', await students.indexes());

    // ---------------------------------------------------------
    // 12. Demonstrate why indexing is useful using explain()
    // ---------------------------------------------------------
    console.log('\n--- 12. Index Search Performance Demonstration (explain) ---');
    const explainData = await students.find({ rollNo: "23CM001" }).explain("executionStats");
    console.log('Winning Plan Stage:', explainData.queryPlanner?.winningPlan?.inputStage?.stage || explainData.queryPlanner?.winningPlan?.stage);
    console.log('Total Docs Examined:', explainData.executionStats?.totalDocsExamined);
    console.log('Execution Time (ms):', explainData.executionStats?.executionTimeMillis);

    // ---------------------------------------------------------
    // ⭐ Real-Time Extensions
    // ---------------------------------------------------------
    console.log('\n=== Real-Time Extensions ⭐ ===');

    console.log('\n--- 13. Students Scoring Above 80 ---');
    console.log(await students.find({ marks: { $gt: 80 } }).toArray());

    console.log('\n--- 14. Students Scoring Below 50 ---');
    console.log(await students.find({ marks: { $lt: 50 } }).toArray());

    console.log('\n--- 15. Highest Scoring Student ---');
    const topScorer = await students.find().sort({ marks: -1 }).limit(1).toArray();
    console.log(topScorer[0]);

    console.log('\n--- 16. Students in ECE Branch ---');
    console.log(await students.find({ branch: "ECE" }).toArray());

    console.log('\n--- 17. Student Leaderboard View ---');
    const leaderboard = await students.find({}, { projection: { _id: 0, rollNo: 1, name: 1, branch: 1, marks: 1 } })
      .sort({ marks: -1 })
      .toArray();
    console.table(leaderboard);

    console.log('\n All operations completed successfully.');
  } catch (err) {
    console.error('Error running MongoDB operations:', err);
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
