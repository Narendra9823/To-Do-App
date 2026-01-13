/**
 * Accessible To-Do List Application
 * Features:
 * - Add, delete, and complete tasks
 * - Data persistence using localStorage
 * - Keyboard and screen-reader accessible
 */


// Select elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Load tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Get tasks from localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create task element
function createTaskElement(taskText, completed = false) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = completed;
checkbox.setAttribute("aria-label", `Mark ${taskText} as complete`);


    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("aria-label", `Delete ${taskText}`);


    if (completed) {
        li.classList.add("completed");
    }

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
        updateTaskStatus(taskText, checkbox.checked);
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        deleteTask(taskText);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Add task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const tasks = getTasks();
    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);

    createTaskElement(taskText);

    todoInput.value = "";
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

// Update task completion status
function updateTaskStatus(taskText, completed) {
    const tasks = getTasks();
    const updatedTasks = tasks.map(task =>
        task.text === taskText ? { ...task, completed } : task
    );
    saveTasks(updatedTasks);
}

// Delete task
function deleteTask(taskText) {
    const tasks = getTasks();
    const filteredTasks = tasks.filter(task => task.text !== taskText);
    saveTasks(filteredTasks);
}

// Events
addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
