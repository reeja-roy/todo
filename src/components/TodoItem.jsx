
function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5 accent-purple-600"
      />

      <div className="flex-1">
        <h3
          className={`font-medium ${
            todo.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {todo.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Due: {todo.date}
        </p>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-600 hover:bg-red-200"
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;
