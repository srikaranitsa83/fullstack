// Import the File System module
const fs = require("fs");
const readline = require("readline");

// Create an interface to accept input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for the filename
rl.question("Enter the filename: ", function (filename) {

    // Ask for the initial content
    rl.question("Enter the content: ", function (content) {

        // 1. Create and write the file
        fs.writeFile(filename, content, function (err) {

            if (err) {
                console.log("Error creating file:", err);
                rl.close();
                return;
            }

            console.log("\nFile created and content written successfully.");

            // 2. Read the file contents
            fs.readFile(filename, "utf8", function (err, data) {

                if (err) {
                    console.log("Error reading file:", err);
                    rl.close();
                    return;
                }

                console.log("\nOriginal File Content:");
                console.log(data);

                // Ask for additional content
                rl.question("\nEnter additional content to append: ",
                    function (additionalContent) {

                    // 3. Append additional content
                    fs.appendFile(
                        filename,
                        "\n" + additionalContent,
                        function (err) {

                        if (err) {
                            console.log("Error appending content:", err);
                            rl.close();
                            return;
                        }

                        console.log("\nAdditional content appended successfully.");

                        // 4. Read and display final contents
                        fs.readFile(filename, "utf8", function (err, finalData) {

                            if (err) {
                                console.log("Error reading final content:", err);
                                rl.close();
                                return;
                            }

                            console.log("\nFinal File Content:");
                            console.log("-------------------");
                            console.log(finalData);
                            console.log("-------------------");

                            // Close the input interface
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});
