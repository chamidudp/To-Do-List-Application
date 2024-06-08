const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'todo_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Fetch all tasks
app.get('/tasks', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
    db.query(sql, [title, description], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'Failed to add task' });
        } else {
            res.json({ id: result.insertId, title, description, completed: false });
        }
    });
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const sql = 'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?';
    db.query(sql, [title, description, completed, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'Failed to update task' });
        } else {
            res.json({ id, title, description, completed });
        }
    });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'Failed to delete task' });
        } else {
            res.json({ message: 'Task deleted successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
