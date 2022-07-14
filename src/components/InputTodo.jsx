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

    return(
        <form className="input-todo d-flex d-center" onSubmit={onSubmit}>
            <input type="text" placeholder="What are you up to?" onChange={onChange} value={todo}/>
            <button>todo</button>
        </form>
    )
}

export default InputTodo;
