import '../css/ListTodo.css';

export default function ListTodo({todoList}){
    const onClick = (e) => {
        console.log('its on click ', e)
    }
    return (
        <ul>
            {
                todoList.map((item, idx) =>
                    <li key={idx} className="checkbox-circle">
                        <input type="checkbox" id={item} value={item} onClick={onClick}/>
                        <label htmlFor={item}>{item}</label>
                    </li> )
            }
        </ul>
    )
}

