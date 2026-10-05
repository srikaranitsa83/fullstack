/* global use, db */
// MongoDB Playground for collegeDB
// To run: Open in VS Code with MongoDB extension and click 'Play' (Ctrl+Alt+S / Cmd+Option+S)
// Or run via mongosh: mongosh < collegeDB_queries.mongodb.js

// 1. Select the database to use
use('collegeDB');

// Optional: Reset collection
db.students.drop();

// =============================================================================
// Requirement 1: Insert at least 6 student documents into 'students' collection
// =============================================================================
db.students.insertMany([
  { rollNo: "23CM001", name: "Ravi Kumar",   branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
  { rollNo: "23CM002", name: "Priya Sharma", branch: "CSE",      year: 2, marks: 92, email: "priya@example.com" },
  { rollNo: "23CM003", name: "Ananya Reddy", branch: "CSE-AIML", year: 3, marks: 78, email: "ananya@example.com" },
  { rollNo: "23CM004", name: "Karthik Varma",branch: "ECE",      year: 1, marks: 45, email: "karthik@example.com" },
  { rollNo: "23CM005", name: "Suresh Raina", branch: "IT",       year: 4, marks: 68, email: "suresh@example.com" },
  { rollNo: "23CM006", name: "Sneha Patel",  branch: "CSE-AIML", year: 2, marks: 48, email: "sneha@example.com" }
]);

// =============================================================================
// Requirement 2: Display all students
// =============================================================================
db.students.find();

// =============================================================================
// Requirement 3: Display students belonging to a particular branch (CSE-AIML)
// =============================================================================
db.students.find({ branch: "CSE-AIML" });

// =============================================================================
// Requirement 4: Display students who scored more than 75 marks
// =============================================================================
db.students.find({ marks: { $gt: 75 } });

// =============================================================================
// Requirement 5: Search for a student using rollNo
// =============================================================================
db.students.find({ rollNo: "23CM001" });

// =============================================================================
// Requirement 6: Search students based on condition (year: 3 and marks >= 80)
// =============================================================================
db.students.find({ year: 3, marks: { $gte: 80 } });

// =============================================================================
// Requirement 7: Update the marks of a particular student
// =============================================================================
db.students.updateOne(
  { rollNo: "23CM001" },
  { $set: { marks: 95 } }
);

// =============================================================================
// Requirement 8: Update another field such as email or branch
// =============================================================================
db.students.updateOne(
  { rollNo: "23CM002" },
  { $set: { email: "priya.sharma@college.edu" } }
);

// =============================================================================
// Requirement 9: Delete a student record using rollNo
// =============================================================================
db.students.deleteOne({ rollNo: "23CM005" });

// =============================================================================
// Requirement 10: Display students in descending order of marks
// =============================================================================
db.students.find().sort({ marks: -1 });

// =============================================================================
// Requirement 11: Create an index on rollNo
// =============================================================================
db.students.createIndex({ rollNo: 1 }, { unique: true });
db.students.getIndexes();

// =============================================================================
// Requirement 12: Demonstrate why indexing is useful for searching
// =============================================================================
db.students.find({ rollNo: "23CM001" }).explain("executionStats");

// =============================================================================
// ⭐ Real-Time Extensions
// =============================================================================

// Extension 1: Find students scoring above 80
db.students.find({ marks: { $gt: 80 } });

// Extension 2: Find students scoring below 50
db.students.find({ marks: { $lt: 50 } });

// Extension 3: Find the highest-scoring student
db.students.find().sort({ marks: -1 }).limit(1);

// Extension 4: Find students belonging to a particular branch (ECE)
db.students.find({ branch: "ECE" });

// Extension 5: Display students sorted according to marks (Leaderboard Projection)
db.students.find({}, { _id: 0, rollNo: 1, name: 1, branch: 1, marks: 1 }).sort({ marks: -1 });
