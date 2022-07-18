import '../css/ListTodo.css';

export default function ListTodo({todoList, deleteTodo}){
    const onClick = (e, sort, item) => {
       switch(sort){
           case 'delete' :
               deleteTodo(item);
               return;
       }
    }

   const handleEvent = (e, item) => {
        if(e.target.checked){
            console.log('its checked!',  e.target.classList)
            console.log(item);
            // const data = document.getElementById(`${idx}`)
            // console.log(data.classList)
            // data.classList.toggle('completed');
        } else{
            console.log('its not checked')
        }
   }

    return (
        <ul className="list-container">
            {
                todoList.map((item, idx) =>
                    <li key={idx} className="checkbox-circle d-flex d-between">
                        <div>
                            <input type="checkbox" id={item.todo} value={item.todo} onChange={(e) => handleEvent(e, item)}/>
                            <label htmlFor={item.todo} id={idx}>{item.todo}</label>
                        </div>
                        <div onClick={(e) => onClick(e, 'delete', item.todo)}>❌</div>
                        {/*<div onClick={this.onClick.bind(this, 'delete', idx)}>❌</div>*/}
                    </li> )
            }
        </ul>
    )
}

