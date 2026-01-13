// Select elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add task function
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Append to list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
}

// Button click event
addBtn.addEventListener("click", addTask);

// Enter key support
todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
