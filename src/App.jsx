import { useState, useEffect } from 'react'
import Header from './components/Header';
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import './css/main.css'
import './css/reset.css'

function App() {
    const [todoList, setTodoList] = useState([]);
    const handleClick = (todo) => setTodoList(curr => [todo, ...curr]);
    const deleteTodo = (todo) => {
        console.log('app.jsx todod : ', todo)
        const refreshList = todoList.filter(item => item !== todo);
        setTodoList(refreshList)

    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    },[todoList])

  return (
    <div>
      <Header />
        <InputTodo childPropFn={handleClick}/>
        <ListTodo todoList={todoList} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
