
import React, { useState } from 'react';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';

const App = () => {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleSave = (updatedTask) => {
        setSelectedTask(null); // Close the form after saving
        // Trigger a re-fetch if needed
    };

    const handleEdit = (task) => {
        setSelectedTask(task); // Open the form in edit mode
    };

    return (
        <div>
            <h1>Task Management</h1>
            <TaskList onEdit={handleEdit} />
            <TaskForm task={selectedTask} onSave={handleSave} />
        </div>
    );
};

export default App;
