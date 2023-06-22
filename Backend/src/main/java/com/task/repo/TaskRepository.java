package com.task.repo;

import com.task.model.Task;
import com.task.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

    List<Task> findByTitleIgnoreCase(String title);
    List<Task> findByAssignedUser(String assignedUser);

    List<Task> findByDescription(String description);

    List<Task> findByDueDate(LocalDate dueDate);

    List<Task> findByCompleted(Boolean completed);
}
