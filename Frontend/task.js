// tasks.js

const taskList = document.querySelector('.task-list');

// Fetch all tasks from the API
async function fetchTasks() {
  try {
    const response = await fetch('http://localhost:8888/tasks/getAllTasks');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error(error);
    // Handle error gracefully (e.g., display an error message on the UI)
    return [];
  }
}

// Function to generate a task item HTML
function generateTaskItem(task) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <div class="task-title">${task.title}</div>
    <div class="task-description">${task.description}</div>
    <div class="task-due-date">Due Date: ${task.dueDate}</div>
    <div class="task-due-date">Due Date: ${task.assignedUser}</div>
    <div class="task-actions">
      <button class="update-button" data-task-id="${task.id}">Update</button>
      <button class="delete-button" data-task-id="${task.id}">Delete</button>
    </div>
  `;
  return taskItem;
}

// Function to render all tasks
async function renderTasks() {
  try {
    const tasks = await fetchTasks();
    taskList.innerHTML = '';
    tasks.forEach((task) => {
      const taskItem = generateTaskItem(task);
      taskList.appendChild(taskItem);
    });
  } catch (error) {
    console.error(error);
  }
}

// Handle click events on the task list
taskList.addEventListener('click', async (e) => {
    // console.log("working")
  if (e.target.classList.contains('delete-button')) {
    // const task = e.target.get;
    // console.log(e.target)
    const taskId = parseInt(e.target.getAttribute('data-task-id'));
    try {
      // Delete the task from the API
      const response = await fetch(`http://localhost:8888/tasks/deleteTask/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      // Remove the task item from the UI
      e.target.closest('.task-item').remove();
    } catch (error) {
      console.error(error);
      // Handle error gracefully (e.g., display an error message on the UI)
    }
  } else if (e.target.classList.contains('update-button')) {
    const taskId = parseInt(e.target.getAttribute('data-task-id'));
    // Redirect to the update task page with task ID as a query parameter
    window.location.href = `update-task.html?id=${taskId}`;
  }
});


// Call the renderTasks function on page load
renderTasks();

// generateUpdatedTaskForm();


function create(){
    window.location.href = "createTask.html"
}