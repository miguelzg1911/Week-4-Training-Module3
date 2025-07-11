# Week-4-Training-Module3

# 🧩 DOM Manipulation & Web Storage — Week 4 Training

This project is part of the **Week 4 Training - Module 3**, where we practiced key front-end development concepts:

- DOM manipulation using JavaScript
- Data persistence using Local Storage and Session Storage
- Input validation and dynamic user interaction

---

## 🚀 Overview

The application allows a user to input their **name** and **age**, then:

1. Validates the input (only letters for the name, age between 1–120).
2. Stores that data in **Local Storage** (persists even after refreshing).
3. Tracks user interactions (button clicks) with **Session Storage** (resets after closing the tab).
4. Dynamically updates the interface with stored data or clears it when requested.

---

## 🧠 How It Works (Code Breakdown)

### HTML Structure (`manipulacion_dom.html`)

- A form with inputs for `name` and `age`.
- Two buttons:
  - `Save Data`: triggers data validation and storage.
  - `Clear Data`: removes all stored values.
- A `<div>` where the greeting is dynamically rendered.
- A `<p>` to show the number of interactions (clicks) in the current session.

```html
<form id="userForm">
  <input type="text" id="name" required />
  <input type="number" id="age" required />
  <button id="saveButton">Save Data</button>
  <button id="clearButton">Clear Data</button>
</form>
<div id="output"></div>
<p id="interactionCounter">Session Interactions: 0</p>
```

---

### JavaScript Logic (`script.js`)

#### 📌 Event: Save Button

```js
document.getElementById('saveButton').addEventListener('click', () => {
```

- Gets input values from the form.
- Validates:
  - Name must match a regular expression (`/^[a-zA-Z\s]+$/`)
  - Age must be between 1 and 120
- If valid:
  - Saves `userName` and `userAge` in **Local Storage**
  - Calls `displayData()` to show a message
- Updates interaction count in **Session Storage**

#### 📌 Display Function

```js
function displayData() {
  const name = localStorage.getItem('userName');
  const age = localStorage.getItem('userAge');
```

- Checks if data exists in Local Storage
- Updates the DOM to say: `Hello [Name], you are [Age] years old.`
- If no data: shows a "No data stored" message

#### 📌 Counter Logic

```js
sessionStorage.setItem('interactionCount', 0);
```

- On first page load, initializes the counter to 0.
- Each time a button is clicked, increases the counter and updates the text:
  `Session Interactions: [n]`

#### 📌 Event: Clear Button

```js
document.getElementById('clearButton').addEventListener('click', () => {
```

- Clears **Local Storage**
- Refreshes the output message by calling `displayData()`
- Also increments the interaction count

---

## 🧪 What You Can Test

- ✅ DOM updates (text, interaction counter)
- ✅ Local Storage persists data after refreshing
- ✅ Session Storage resets when closing the browser tab
- ✅ Console logs and alerts validate input and functionality

---

## 📂 Project Structure

```
project-folder/
│
├── manipulacion_dom.html
├── script.js
├── styles.css
├── screenshots/
│   ├── dom-modification.png
│   ├── local-storage.png
│   └── session-storage.png
└── README.md
```
