import '../css/ListTodo.css';

export default function ListTodo({todoList, deleteTodo}){
    const onClick = (e, sort, item) => {
       switch(sort){
           case 'delete' :
               deleteTodo(item);
               return;
       }
    }

    return (
        <ul className="list-container">
            {
                todoList.map((item, idx) =>
                    <li key={idx} className="checkbox-circle d-flex d-between">
                        <div>
                            <input type="checkbox" id={item} value={item}/>
                            <label htmlFor={item}>{item}</label>
                        </div>
                        <div onClick={(e) => onClick(e, 'delete', item)}>❌</div>
                        {/*<div onClick={this.onClick.bind(this, 'delete', idx)}>❌</div>*/}
                    </li> )
            }
        </ul>
    )
}

