import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask } from '../services/taskService';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const taskData = await getAllTasks();
            setTasks(taskData);
        };

        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.assigned}</h3>
                        <p>Status: {task.status}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Comments: {task.comments}</p>
                        <p>Date: {new Date(task.date).toLocaleDateString()}</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
