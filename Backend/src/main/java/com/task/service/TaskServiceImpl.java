package com.task.service;

import com.task.exception.TaskException;
import com.task.model.Task;
import com.task.model.User;
import com.task.repo.TaskRepository;
import com.task.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public class TaskServiceImpl implements TaskService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    TaskRepository taskRepository;

    @Override
    public Task createTask(Task task) throws TaskException {
        User assignedUser = userRepository.findByUsername(task.getAssignedUser());
        if (assignedUser == null) {
            throw new TaskException("User Do not exist");
        }
        Task savedTask = taskRepository.save(task);
        return savedTask;
    }

    @Override
    public Task updateTask(Task task) throws TaskException {
        Optional<Task> existingTask =  taskRepository.findById(task.getId());
        if (!existingTask.isEmpty()){
            throw new TaskException("Task do not Exist");
        }else {
            Task newTask = existingTask.get();
            newTask.setTitle(task.getTitle());
            newTask.setDescription(task.getDescription());
            newTask.setDueDate(task.getDueDate());
            newTask.setAssignedUser(task.getAssignedUser());
            newTask.setCompleted(task.isCompleted());

            Task updatedTask = taskRepository.save(newTask);
            return updatedTask;
        }

    }

    @Override
    public Task deleteTask(Task task) throws TaskException {
        Optional<Task> existingTask =  taskRepository.findById(task.getId());
        if (!existingTask.isEmpty()){
            throw new TaskException("Task do not Exist");
        }else {
            taskRepository.delete(existingTask.get());
            return existingTask.get();
        }
    }

    @Override
    public List<Task> getTaskByTitle(String title) throws TaskException {
        List<Task> tasks = taskRepository.findByTitleContainingIgnoreCase(title);
        if(tasks.isEmpty()){
            throw new TaskException("There are no task exist with the title : "+title);
        }
        return tasks;
    }

    @Override
    public List<Task> getTaskByDescriptions(String desc) throws TaskException {
        List<Task> tasks = taskRepository.findByDescription(desc);
        if(tasks.isEmpty()){
            throw new TaskException("There are no task exist with the description : "+desc);
        }
        return tasks;
    }

    @Override
    public List<Task> getTaskByAssignedUser(String userName) throws TaskException {
        List<Task> tasks = taskRepository.findByAssignedUser(userName);
        if(tasks.isEmpty()){
            throw new TaskException("There are no task exist with the Assigned User : "+userName);
        }
        return tasks;
    }

    @Override
    public List<Task> getTaskByDueDate(LocalDate date) throws TaskException {
        List<Task> tasks = taskRepository.findByDueDate(date);
        if(tasks.isEmpty()){
            throw new TaskException("There are no task exist with the title : "+date);
        }
        return tasks;
    }

    @Override
    public List<Task> getTaskByStatus(boolean status) throws TaskException {
        List<Task> tasks = taskRepository.findByCompleted(status);
        if(tasks.isEmpty()){
            throw new TaskException("There are no task exist with the status : "+status);
        }
        return tasks;
    }
}
