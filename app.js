document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    // Fetch tasks from the server
    function fetchTasks() {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(tasks => {
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const taskItem = createTaskElement(task);
                    taskList.appendChild(taskItem);
                });
            });
    }

    // Create a new task element
    function createTaskElement(task) {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.title}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        li.querySelector('.delete').addEventListener('click', () => {
            fetch(`http://localhost:3000/tasks/${task.id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(() => fetchTasks());
        });

        li.querySelector('.edit').addEventListener('click', () => {
            const title = prompt('Enter new title', task.title);
            const description = prompt('Enter new description', task.description);
            const completed = confirm('Mark as completed?');

            fetch(`http://localhost:3000/tasks/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, completed }),
            })
                .then(response => response.json())
                .then(() => fetchTasks());
        });

        return li;
    }

    // Handle form submission
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        })
            .then(response => response.json())
            .then(task => {
                const taskItem = createTaskElement(task);
                taskList.appendChild(taskItem);
                taskForm.reset();
            });
    });

    // Fetch tasks on page load
    fetchTasks();
});
