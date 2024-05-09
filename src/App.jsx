import { useState } from "react";
import Navbar from "./components/Navbar";


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const handleTextChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSave = (e) => {
    if (!todo == "") {
      setTodos((prevTodos) => [...prevTodos, { text: todo, completed: false }]);
      setTodo("");
    } else {
      console.log("Enter something");
    }
  };

  const handleEditButtonClick = (index) => {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        updatedTodos[index].text = newText;
        return updatedTodos;
      });
    }
  };

  const handleDeleteButtonClick = (index) => {
    setTodos((prevTodos) => {
      const updatedTexts = [...prevTodos];
      updatedTexts.splice(index, 1);
      return updatedTexts;
    });
  };

  const handleCheckboxChange = (index) => {
    console.log(index);
    setTodos((prevSavedTodos) => {
      const updatedTodos = [...prevSavedTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return updatedTodos;
    });
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container mx-auto bg-slate-300 rounded-xl p-5 my-5 max-w-3xl ">
        <div className="addTodo flex-col w-full">
          <div className="input-div mt-4 mb-4 max-w-3xl flex justify-center items-center">
            <input
              type="text"
              value={todo}
              placeholder="Enter your todo here..."
              onChange={handleTextChange}
              className="w-3/4 placeholder:text-xs h-7 p-2 pb-3"
            />
            <button
              className="bg-slate-700 text-white mx-2 p-1 rounded-md hover:bg-white hover:text-slate-700 font-semibold text-sm"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>

        <hr
          className={`h-px mt-8 mb-6 bg-gray-400 opacity-50 border-0 ${
            todos.length <= 0 ? "hidden" : ""
          }`}
        />

        <div
          className={`main-div flex justify-center mb-3 ${
            todos.length <= 0 ? "hidden" : ""
          }`}
        >
          <h1 className="font-bold text-slate-700">Your Todos</h1>
          <button
            className={`bg-slate-700 text-white mx-2 p-1 rounded-md hover:bg-white hover:text-slate-700 font-semibold text-sm hidden `}
          >
            Show Completed
          </button>
        </div>
        <div className="todos w-full">
          <div className="todo w-full flex flex-col  justify-center">
            {todos.map((item, index) => (
              <div
                key={index}
                className="div flex justify-between p-2 m-1 rounded-xl bg-slate-400"
              >
                <p className="mx-2">{index + 1}</p>
                <input
                  className="justify-start mr-2"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
                <p
                  className={`${
                    item.completed ? "line-through" : "none"
                  } w-5/6`}
                >
                  {item.text}
                </p>
                <button
                  className="bg-slate-700 text-white mx-1 p-1 rounded-md hover:bg-white hover:text-slate-700 font-semibold text-sm"
                  onClick={() => handleEditButtonClick(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-slate-700 text-white  p-1 rounded-md hover:bg-white hover:text-slate-700 font-semibold text-sm"
                  onClick={() => handleDeleteButtonClick(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
