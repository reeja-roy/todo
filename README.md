# Todo App

A simple and user-friendly Todo application built using **React, Vite, JavaScript, and Tailwind CSS**.

The application helps users organize their daily activities by creating tasks, setting due dates, tracking completed tasks, and deleting tasks when they are no longer needed.

## Features

- **Add Tasks:** Create new tasks by entering a task title.
- **Set Due Date:** Select a date for each task.
- **View Tasks:** Display all added tasks in a list.
- **Complete Tasks:** Mark tasks as completed using a checkbox.
- **Delete Tasks:** Remove tasks that are no longer required.
- **Simple Interface:** Clean and easy-to-use design.

## Technologies Used

- React – Building the user interface.
- Vite – Frontend development and build tool.
- JavaScript – Application logic.
- Tailwind CSS – Styling and responsive design.

## Project Structure

```text
todo-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- VS Code (recommended)

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd todo-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## How to Use the Application

The application is designed to be simple enough for anyone to use.

### 1. Add a New Task

- Enter your task in the task input field.
- Select the due date using the date picker.
- Click the **Add Todo** button.
- Your task will appear in the task list.

### 2. View Your Tasks

All created tasks are displayed under the **My Tasks** section.

Each task displays:
- Task title
- Due date
- Completion checkbox
- Delete button

### 3. Mark a Task as Completed

- Find the task you have finished.
- Click its checkbox.
- The task will appear with a strikethrough style to indicate completion.

### 4. Delete a Task

- Find the task you want to remove.
- Click the **Delete** button.
- The selected task will be removed from the list.

## How It Works

The application uses React's `useState` Hook to manage task data.

- `useState` – Stores tasks and input values.
- `Props` – Passes data and functions between components.
- `map()` – Displays multiple tasks.
- `filter()` – Removes selected tasks.
- `Spread Operator` – Creates updated arrays and objects without directly modifying existing state.

## Current Limitations

- Tasks are stored only in React state.
- Tasks are lost when the browser page is refreshed.
- No user authentication or database integration.
- The application currently supports basic task management.

## Future Improvements

- Save tasks using localStorage.
- Edit existing tasks.
- Filter tasks by pending and completed status.
- Highlight overdue tasks.
- Integrate a backend and database.
- Add user authentication.

## License

This project is created for learning and educational purposes.