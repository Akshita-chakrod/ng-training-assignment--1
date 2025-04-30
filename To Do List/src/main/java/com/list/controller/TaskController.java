package com.list.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.list.entity.User;
import com.list.service.TaskService;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public List<User> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping("/task")
    public User createTask(@RequestBody User user) {
        return taskService.createTask(user);
    }

    @PutMapping("/task/{id}")
    public User updateTask(@PathVariable String id, @RequestBody User user) {
        return taskService.updateTask(id, user);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable String id) {
        taskService.deleteTask(id);
    }
}
