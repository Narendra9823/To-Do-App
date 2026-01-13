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

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as complete");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("aria-label", "Delete task");

    // Toggle completed state
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
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
