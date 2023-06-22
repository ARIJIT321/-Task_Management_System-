
// Update Task Page
const updateTaskForm = document.querySelector('.update-task-form');

// Get the task ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
  const taskId = parseInt(urlParams.get('id'));
// if (updateTaskForm) 
function generateUpdatedTaskForm(){
  const updateTaskTitle = document.getElementById('updateTaskTitle');
  const updateTaskDescription = document.getElementById('updateTaskDescription');
  const updateTaskDueDate = document.getElementById('updateTaskDueDate');
  const updateTaskAssignedUser = document.getElementById('updateTaskAssignedUser');
  const updateTaskButton = document.getElementById('updateTaskButton');
  

  // Fetch the task details from the API
  async function fetchTaskDetails(taskId) {
    try {
      const response = await fetch(`http://localhost:8888/tasks/getTasks/Id/${taskId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch task details');
      }
      const task = await response.json();
      return task;
    } catch (error) {
      console.error(error);
      // Handle error gracefully (e.g., display an error message on the UI)
      return null;
    }
  }

  // Populate the form with the task details
  async function populateTaskForm() {
    try {
      const task = await fetchTaskDetails(taskId);
      if (task) {
        updateTaskTitle.value = task.title;
        updateTaskDescription.value = task.description;
        updateTaskDueDate.value = task.dueDate;
        updateTaskAssignedUser.value = task.assignedUser;
      }
    } catch (error) {
      console.error(error);
      // Handle error gracefully (e.g., display an error message on the UI)
    }
  }
 

  

  // Populate the form with the task details on page load
  populateTaskForm();
}

// Call the renderTasks function on page load
// renderTasks();

generateUpdatedTaskForm();
  

async function myFun(){
    console.log("working again")
    const updatedTask = {
      id: taskId,
      title: updateTaskTitle.value,
      description: updateTaskDescription.value,
      dueDate: updateTaskDueDate.value,
      assignedUser: updateTaskAssignedUser.value
    };
    try {
      // Send updated task data to the API
      const response = await fetch(`http://localhost:8888/tasks/updateTask`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      // Redirect back to the task list page
      window.location.href = 'tasks.html';
    } catch (error) {
      console.error(error);
      // Handle error gracefully (e.g., display an error message on the UI)
    }
} 
