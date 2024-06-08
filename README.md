# To-Do-List-Application
Building a To-Do List Application

Backend Development:

Created a Node.js backend using Express.
RESTful APIs were put into place to manage CRUD tasks.

a MySQL database was connected to the backend to hold task data.
made ensuring API endpoints were properly validated and error-handled.


Frontend Development:

used JavaScript, CSS, and HTML to create a user interface.

- features to add new tasks, 
- update current tasks, 
- mark tasks as finished, 
- delete tasks have been implemented.

used AJAX to establish a connection with the backend.

![1](https://github.com/chamidudp/To-Do-List-Application/assets/84907191/070903af-89f4-46e5-bcbb-bd97e072e7df)




![3](https://github.com/chamidudp/To-Do-List-Application/assets/84907191/2d3b5da8-c468-4fb9-bdaf-0dfe35289718)

![4](https://github.com/chamidudp/To-Do-List-Application/assets/84907191/137b6132-4c03-4152-87a7-d894f8cb3145)
![5](https://github.com/chamidudp/To-Do-List-Application/assets/84907191/f6bd35a1-c3f9-421b-a074-7d37ce0d3554)
![6](https://github.com/chamidudp/To-Do-List-Application/assets/84907191/09e884d3-b7a0-4ed3-bab9-7a5f4c1d0975)



# How to Run This Project: Step-by-Step Guide

Requirements

- Ensure you have Node.js installed.
- Make sure you have MySQL installed and running on your machine.

Installation and Setup
Follow these steps to download and run the To-Do List application locally:

1. Clone the Repository
Open your terminal and run:
```
git clone https://github.com/yourusername/To-Do-List-Application.git
```


```
cd To-Do-List-Application
```

2. Install Dependencies
Install the required Node.js:
```
npm install
```

3. Set Up the MySQL Database
Open MySQL and create a new database named todo_app:

SQL
```
CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
```

4. Configure Database Connection
Rename the .env and update the database configuration with your MySQL credentials:

env
```
DB_HOST=localhost
DB_USER=yourUsername
DB_PASSWORD=yourPassword
DB_NAME=todo_app
5. Run the Server
Start the server by running:
node server.js
```

6. Open the Application
Open your browser and navigate to  ``` http://localhost:3000 ```  to view the application.


## Features

### **User Authentication**
**User Sign-Up and Log-In**  
Enable users to create accounts and log in to manage their personal task lists securely. Includes sign-up, log-in, session management, and encrypted password storage.

### **Task Sorting and Filtering**
**Organize Tasks Efficiently**  
Allow users to sort tasks by due date and priority, and filter tasks by status (completed or pending). Enhances task management and productivity.

### **Drag-and-Drop Task Reordering**
**Interactive Task Management**  
Enable users to reorder tasks via drag-and-drop. Updates task order in real-time and saves the new order, providing a flexible and intuitive user experience.



## Submission: Please don't hesitate to contact me with any more queries or suggestions for additions or changes to the project!



