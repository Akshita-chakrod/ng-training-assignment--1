package com.list.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.list.entity.User;
import com.list.repository.TaskRepository;
import com.list.service.TaskService;
@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
	private TaskRepository taskRepository;

	@Override
    public List<User> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public User createTask(User user) {
        return taskRepository.save(user);
    }

    @Override
    public User updateTask(String id, User updatedUser) {
        Optional<User> optionalUser = taskRepository.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setAssigned(updatedUser.getAssigned());
            existingUser.setStatus(updatedUser.getStatus());
            existingUser.setPriority(updatedUser.getPriority());
            existingUser.setComments(updatedUser.getComments());
            existingUser.setDate(updatedUser.getDate());
            return taskRepository.save(existingUser);
        }
        return null;
    }

    @Override
    public void deleteTask(String id) {
        taskRepository.deleteById(id);
    }
}
