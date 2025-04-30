import React, { useState } from 'react';
import { createTask, updateTask } from '../services/taskService';

const TaskForm = ({ task, onSave }) => {
    const [assigned, setAssigned] = useState(task ? task.assigned : '');
    const [status, setStatus] = useState(task ? task.status : '');
    const [priority, setPriority] = useState(task ? task.priority : '');
    const [comments, setComments] = useState(task ? task.comments : '');
    const [date, setDate] = useState(task ? task.date : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { assigned, status, priority, comments, date };

        if (task) {
            const updatedTask = await updateTask(task.id, taskData);
            onSave(updatedTask);
        } else {
            const newTask = await createTask(taskData);
            onSave(newTask);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Assigned:</label>
            <input
                type="text"
                value={assigned}
                onChange={(e) => setAssigned(e.target.value)}
                required
            />
            <label>Status:</label>
            <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
            />
            <label>Priority:</label>
            <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
            />
            <label>Comments:</label>
            <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
            />
            <label>Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">{task ? 'Update Task' : 'Create Task'}</button>
        </form>
    );
};

export default TaskForm;
