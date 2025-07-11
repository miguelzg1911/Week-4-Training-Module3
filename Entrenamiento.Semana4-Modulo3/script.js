// Event listener: triggered when "Save Data" button is clicked
document.getElementById('saveButton').addEventListener('click', () => {
    // Get input elements for name and age
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    // Check if input elements exist (safety check)
    if (!nameInput || !ageInput) {
        console.error('Form elements do not exist.');
        return;
    }

    // Get and clean up name input value
    const name = nameInput.value.trim();

    // Regular expression to only allow letters and spaces in the name
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('The name should only contain letters and spaces.');
        return;
    }

    // Parse age as a number
    const age = parseInt(ageInput.value);

    // Validate age range (between 1 and 120)
    if (age <= 0 || age > 120) {
        alert('Please enter a valid age between 1 and 120.');
        return;
    }

    // If both name and age are valid, store them in Local Storage
    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name); // Store name
        localStorage.setItem('userAge', age);   // Store age
        displayData(); // Update the display
    } else {
        alert('Please enter a valid name and a numeric age.');
    }
});

// Function to show the data stored in Local Storage
function displayData() {
    const name = localStorage.getItem('userName'); // Retrieve name
    const age = localStorage.getItem('userAge');   // Retrieve age
    const outputDiv = document.getElementById('output');

    // If both values are found, show them in a greeting
    if (name && age) {
        outputDiv.textContent = `Hello ${name}, you are ${age} years old.`;
    } else {
        // If no data is stored
        outputDiv.textContent = `No data stored.`;
    }
}

// When the page is loaded, display existing data if any
window.onload = displayData;

// Initialize the interaction counter in Session Storage (only once per session)
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

// Function to increment and display the number of interactions during the session
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount')); // Get current count
    count++; // Increment count
    sessionStorage.setItem('interactionCount', count); // Update storage
    // Update the counter display on the page
    document.getElementById('interactionCounter').textContent = `Session Interactions: ${count}`;
}

// Attach the interaction counter to both buttons
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

// Event listener: triggered when "Clear Data" button is clicked
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear(); // Remove all saved data
    displayData();        // Update the output to reflect cleared state
});
