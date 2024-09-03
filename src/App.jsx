import { useEffect, useState } from "react"
import TodoInputComponent from "./components/TodoInputComponent"
import TodoTaskComponent from "./components/TodoTaskComponent";


function App() {

  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log(todoItems);
  }, [todoItems])
  

  return (
    <div className="container mx-auto">
      <h1 className="text-[48px] uppercase text-center text-green-600 font-bold">Lodo App</h1>
      <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoTaskComponent todoItems={todoItems} setTodoItems={setTodoItems}/>
    </div>
  )
}

export default App
