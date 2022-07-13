import { useState, useEffect } from 'react'
import Header from './components/Header';
import InputTodo from "./components/InputTodo";

function App() {
    const [todoList, setTodoList] = useState([]);
    const handleClick = (todo) => setTodoList(curr => [todo, ...curr]);
    useEffect(() => {
        console.log('todoList : ', todoList);
    },[todoList])

  return (
    <div>
      <Header />
        <InputTodo handleClick={handleClick}/>
    </div>
  )
}

export default App
