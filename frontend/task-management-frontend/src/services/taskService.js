const API_URL = "http://localhost:8080/api/task";

export const getAllTasks = async () => {
    try {
        const response = await fetch(`${API_URL}s`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};

export const createTask = async (task) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        return await response.json();
    } catch (error) {
        console.error("Error creating task:", error);
    }
};

export const updateTask = async (id, updatedTask) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        });
        return await response.json();
    } catch (error) {
        console.error("Error updating task:", error);
    }
};

export const deleteTask = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};
