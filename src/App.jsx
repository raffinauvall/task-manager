import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if(!input.trim()) return;
    setTasks([...tasks, {text:input, completed:false}]);
    setInput("");
  }

  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { text: task.text, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="">
      <h2 className="text-black font-bold mb-3 text-xl">
        Selamat Datang, admin
      </h2>
      <div className="bg-white p-5 rounded-2xl shadow-md">
        <h2 className="text-black text-2xl text-left font-bold mb-2">
          Task Manager
        </h2>
        <input
          className="border me-3 text-black p-2 rounded-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah task..."
        />
        <button
          className="!bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={addTask}
        >
          Tambah
        </button>

        <ul className="text-black">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg mt-1 transition-all duration-300 ${
                task.completed
                  ? "border-2 border-blue-500 bg-blue-100"
                  : "border border-transparent"
              }`}
            >
              <input
                type="checkbox"
                checked="{task.completed}"
                onChange={() => toggleTask(index)}
                className="w-5 h-5 white border-1 cursor-pointer rounded-md"
              />
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
