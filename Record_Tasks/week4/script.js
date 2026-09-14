// Function to change the paragraph text
function changeText() {
    document.getElementById("message").textContent =
        "The webpage has been changed dynamically using JavaScript!";
}


// Function to change the background color
function changeBackground() {

    // Generate a random color
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = color;
}


// Function to add a new item to the list
function addItem() {

    // Get the input value
    let input = document.getElementById("itemInput");

    let itemText = input.value;

    // Check if input is empty
    if (itemText === "") {
        alert("Please enter an item!");
        return;
    }

    // Create a new list item
    let newItem = document.createElement("li");

    // Set the text of the list item
    newItem.textContent = itemText;

    // Add the new item to the list
    document.getElementById("itemList").appendChild(newItem);

    // Clear the input box
    input.value = "";
}


// Function to display current date and time
function updateDateTime() {

    let currentDate = new Date();

    document.getElementById("dateTime").textContent =
        currentDate.toLocaleString();
}


// Update date and time every second
setInterval(updateDateTime, 1000);

// Display date and time when the page loads
updateDateTime();