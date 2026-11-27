import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Add Todo
  const addTodo = () => {
    if (!title.trim() || !date) {
      alert("Please enter task and date");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      date: date,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTitle("");
    setDate("");
  };

  // Complete Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          My Todo List
        </h1>

        {/* Todo Form */}
        <TodoForm
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          addTodo={addTodo}
        />

        {/* Todo List */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            My Tasks ({todos.length})
          </h2>

          {todos.length === 0 ? (
            <p className="py-6 text-center text-gray-400">
              No todos yet. Add your first task!
            </p>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
