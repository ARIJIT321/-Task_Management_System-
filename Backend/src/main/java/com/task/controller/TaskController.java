package com.task.controller;

import com.task.exception.TaskException;
import com.task.model.Task;
import com.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping("/createTask")
    public ResponseEntity<Task> createTask(@RequestBody Task task) throws TaskException {
        Task createdTask = taskService.createTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    @PutMapping("/updateTask")
    public ResponseEntity<Task> updateTask(@RequestBody Task task) throws TaskException {
        Task createdTask = taskService.createTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deleteTask")
    public ResponseEntity<Task> deleteTask(@RequestBody Task task) throws TaskException {
        Task deletedTask = taskService.deleteTask(task);
        return new ResponseEntity<>(deletedTask, HttpStatus.ACCEPTED);
    }

    @GetMapping("/getTasks/assignee/{assignee}")
    public ResponseEntity<List<Task>> getTasksByAssignee(@PathVariable String assignee) throws TaskException {
        List<Task> tasks = taskService.getTaskByAssignedUser(assignee);
        return new ResponseEntity<>(tasks,HttpStatus.ACCEPTED);
    }

    @GetMapping("/getTasks/title/{title}")
    public ResponseEntity<List<Task>> getTasksByTitle(@PathVariable String title) throws TaskException {
        List<Task> tasks = taskService.getTaskByTitle(title);
        return new ResponseEntity<>(tasks,HttpStatus.ACCEPTED);
    }

    @GetMapping("/getTasks/description/{description}")
    public ResponseEntity<List<Task>> getTasksByDescription(@PathVariable String description) throws TaskException {
        List<Task> tasks = taskService.getTaskByAssignedUser(description);
        return new ResponseEntity<>(tasks,HttpStatus.ACCEPTED);
    }

    @GetMapping("/getTasks/date/{date}")
    public ResponseEntity<List<Task>> getTasksByDate(@PathVariable LocalDate date) throws TaskException {
        List<Task> tasks = taskService.getTaskByDueDate(date);
        return new ResponseEntity<>(tasks,HttpStatus.ACCEPTED);
    }

    @GetMapping("/getTasks/status/{status}")
    public ResponseEntity<List<Task>> getTasksByStatus(@PathVariable boolean status) throws TaskException {
        List<Task> tasks = taskService.getTaskByStatus(status);
        return new ResponseEntity<>(tasks,HttpStatus.ACCEPTED);
    }
}
