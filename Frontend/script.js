// Function to display error message
function displayErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.insertBefore(errorDiv, document.getElementById('taskList'));
}

// Function to clear error messages
function clearErrorMessages() {
    const errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].remove();
    }
}

//function to redirect user to registration form
// document.getElementById("New-Register").addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("Working");
// })
function newReg(){
    window.location.href = "registration.html"
}
function userReg(){
    window.location.href = "login.html"
}


//Function to create a task

document.getElementById("createTaskForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;
    const assignedUser = document.getElementById("taskAssignedUser").value;
  
    const task = { 
        title: title, 
        description: description, 
        dueDate: dueDate, 
        assignedUser: assignedUser 
    };
  
    fetch("http://localhost:8888/tasks/createTask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(response => {
        if (response.ok) {
            console.log("Task created successfully.");
            window.location.href = "tasks.html"
            // Update the UI or perform any necessary actions
        } else {
            displayErrorMessage("Error creating task.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        displayErrorMessage("Error creating task.");
    });
});

//function to delete a task

document.getElementById("deleteTaskForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const taskId = document.getElementById("deleteTaskId").value;
  
    fetch("http://localhost:8888/tasks/deleteTask", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: taskId })
    })
    .then(response => {
        if (response.ok) {
            console.log("Task deleted successfully.");
            // Update the UI or perform any necessary actions
        } else {
            displayErrorMessage("Error deleting task.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        displayErrorMessage("Error deleting task.");
    });
});

// function to filter the tasks

document.getElementById("searchTasksForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const searchText = document.getElementById("searchText").value;
    const filterCompleted = document.getElementById("filterCompleted").value;
    const filterDueDate = document.getElementById("filterDueDate").value;
  
    // Build the URL query parameters based on the selected filters
    let url = "/tasks/getTasks?";
    if (searchText !== "") {
        url += "searchText=" + searchText + "&";
    }
    if (filterCompleted !== "") {
        url += "filterCompleted=" + filterCompleted + "&";
    }
    if (filterDueDate !== "") {
        url += "filterDueDate=" + filterDueDate + "&";
    }
  
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error searching tasks.");
        }
    })
    .then(tasks => {
        // Update the UI with the retrieved tasks
        const taskListDiv = document.getElementById("taskList");
        taskListDiv.innerHTML = "";
        tasks.forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.textContent = "Title: " + task.title + ", Description: " + task.description;
            taskListDiv.appendChild(taskDiv);
        });
    })
    .catch(error => {
        console.error("Error:", error);
        displayErrorMessage("Error searching tasks.");
    });
});
