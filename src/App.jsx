import { useState } from 'react'
import Header from './components/Header';
import inputTodo from "./components/InputTodo";
import InputTodo from "./components/InputTodo";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
        <InputTodo />
    </div>
  )
}

export default App
