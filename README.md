# Task Management System

## Description
The Task Management System is a web application that allows users to manage their tasks efficiently. It provides features for user registration, task creation, task updating, task filtering, and more.

The project consists of two main components: the frontend and the backend. The frontend is developed using HTML, CSS, and JavaScript, while the backend is built with Java and Spring Boot.

## Features
- User Registration: Users can register and create an account to access the system.
- Task Creation: Users can create new tasks by providing a title, description, and due date.
- Task Updating: Users can update existing tasks, including changing the title, description, due date, and assignment to another user.
- Task Filtering: Users can search for tasks based on title, description, or assigned user. They can also filter tasks based on completion status and due date.

### Project Setup
1. Clone the repository: `git clone https://github.com/your-username/frontend.git`
   
![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(94).png)

## Backend
The backend of the Task Management System is built with Java and Spring Boot. It provides the necessary APIs and business logic to handle user authentication, task management, and data storage.
<br>--This backend is based on IntelliJ IDEA. Our main goal here is to import the backend folder in any IDE, if you are using any other IDE and you feel confused, feel free to check out some tutorials on how to import a spring boot project on your particular IDE

1. Open any IDE (like IntelliJ IDEA)
2. click on the file
3. click on new (In some IDE there might be an option for import, you can import that way and follow instruction-5)
4. click on Project from the existing source

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(95).png)

5. click on import project from external mode
6. choose maven and click on next

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(96).png)

7. Let your IDE download all the necessary dependencies and library.
8. Open MySql database and create a database with the name "Task" Or you can choose any name.
9. If you want use any other name for your database then go to this loction  -Task_Management_System-\Backend\src\main\resources\application.properties.
10. change the name of the database - spring.datasource.url=jdbc:mysql://localhost:3306/{Name of your database}

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(104).png)

12. Right-click on "TaskManagerAppliction"
13. Click on Run TaskManagerAppliction.main() (In Some IDE there might be an option for "Run as spring boot")

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(97).png)

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(98).png)

10. It will start running(It will show something like this)

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(99).png)

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(100).png)

11. The backend server will start running on `http://localhost:8888`.
12. If you want to change the server you can do that in the appliction.properties file present in -Task_Management_System-\Backend\src\main\resources\application.properties
13. There will be line "server.port=8888", here you can change the port no from 8888 to any port that is available in your system.

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(105).png)

## API Endpoints
The backend provides the following API endpoints:

- `POST /user/addUser`: Register a new user.
- `POST /user/userLogin`: Log in as a user.
- `POST /tasks/createTask`: Create a new task.
- `PUT /tasks/updateTask`: Update an existing task.
- `DELETE /tasks/deleteTask/{taskId}`: Delete a task by ID.
- `GET /tasks/getTasks/assignee/{assignee}`: Get tasks by the assignee.
- `GET /tasks/getTasks/title/{title}`: Get tasks by title.
- `GET /tasks/getTasks/description/{description}`: Get tasks by description.
- `GET /tasks/getTasks/date/{date}`: Get tasks by the due date.
- `GET /tasks/getTasks/status/{status}`: Get tasks by completion status.
- `GET /tasks`: Get all tasks.


## Frontend
The front end of the Task Management System is developed using HTML, CSS, and JavaScript. It provides a user-friendly graphical user interface (GUI) for interacting with the system.
-- After cloning open the frontend folder with vs code and run the index.html file
1. Open vs code
2. click on the file
3. click on the open folder
   
![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(101).png)

5. open the folder where you have cloned the repository
6. chose the "Frontend" folder and click on Select folder

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(102).png)

7. Right-click on index.html file and open it with live server

![Project Logo](https://github.com/ARIJIT321/-Task_Management_System-/blob/main/Resourses/Screenshot%20(103).png)

8. Now you can navigate through the UI and perform tasks.

check for any grammatical error
