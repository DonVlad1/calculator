import { React, useState } from 'react'



const App = () =>
{

  const [todos, setTodos] = useState([
    { text: "Go shopping" },
    { text: "Wash dishes" },
    { text: "Study for the exam" }
  ]);

  const [userInput, setUserInput] = useState("")

  return (
    <div className="app">
      <div className="todo-app">
        <ul className="current-todos">
          {todos.map((todo, index) => (
            <Todo key="index" todo={todo} />
          ))}
        </ul>
        <form>
          <input className="add-todo" type="text" value={userInput} onChange={textInput => setUserInput(textInput.target.value)} />
          <p>{userInput}</p>
        </form>
      </div>
    </div>
  );
};

const Todo = (props) =>
{
  return (
    <li>
      {props.todo.text}
    </li>
  )
}

export default App