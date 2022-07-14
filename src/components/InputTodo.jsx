import '../css/InputTodo.css'
import { useState } from 'react';

function InputTodo({childPropFn}){
    const [todo, setTodo] = useState('');
    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) =>  {
        e.preventDefault();
        if(todo === '') return;
        childPropFn(todo);
        setTodo('');
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onSubmit(e);
        }
    }
    return(
        <form className="input-todo d-flex d-center" onKeyDown={onKeyDown}>
            <input type="text" placeholder="What are you up to?" onChange={onChange} value={todo}/>
        </form>

    )
}

export default InputTodo;
