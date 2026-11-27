function TodoForm({ title, setTitle, date, setDate, addTodo }) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        placeholder="Enter your task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
      />

      <button
        type="button"
        onClick={addTodo}
        className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
