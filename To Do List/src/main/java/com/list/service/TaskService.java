package com.list.service;

import java.util.List;

import com.list.entity.User;

public interface TaskService {
	 List<User> getAllTasks();
	    User createTask(User user);
	    User updateTask(String id, User user);
	    void deleteTask(String id);
}
