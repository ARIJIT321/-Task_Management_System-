package com.task.service;

import com.task.exception.TaskException;
import com.task.model.Task;

import java.time.LocalDate;
import java.util.List;

public interface TaskService {

    public Task createTask(Task task) throws TaskException;

    public Task updateTask(Task task) throws TaskException;

    public Task deleteTask(Task task) throws TaskException;

    public List<Task> getTaskByTitle(String title) throws TaskException;

    public List<Task> getTaskByDescriptions(String desc)throws TaskException;

    public List<Task> getTaskByAssignedUser(String userName) throws TaskException;

    public List<Task> getTaskByDueDate(LocalDate date)throws TaskException;

    public List<Task> getTaskByStatus(boolean status) throws TaskException;


}
