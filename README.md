✅ TO-DO LIST APPLICATION

This is a simple To-Do List Application built using HTML, CSS, and JavaScript. It allows users to add, check off, delete, and save tasks locally in their browser using LocalStorage.

📌 FEATURES

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Tasks remain after refreshing

📂 PROJECT STRUCTURE

📁 To-Do-App
├── 📄 index.html // Main HTML structure
├── 📄 style.css // Styling of the app
├── 📄 app.js // Logic for task handling
├── 📁 img/ // Checked and unchecked icons

 🛠️ HOW IT WORKS

- The input box (`#task-container`) is used to enter tasks.
- On clicking Add, a new `<li>` is created dynamically using JavaScript.
- Each task also includes a delete icon (`×`).
- Clicking a task toggles its "checked" state.
- All tasks are saved in `localStorage` to retain them after page reloads.
