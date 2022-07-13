import '../css/InputTodo.css'
import {useState} from 'react';

function InputTodo({handleClick}){
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) =>  {
        e.preventDefault();
        if(todo === '') return;
        handleClick(todo);
        setTodo('');
        // setTodos(curr => [todo, ...curr])
    }
    console.log(`input : ${todo}`)

    return(
        <form className="input-todo d-flex d-center" onSubmit={onSubmit}>
            <input type="text" placeholder="What are you up to?" onChange={onChange} value={todo}/>
            <button>todo</button>
        </form>
    )
}

export default InputTodo;
