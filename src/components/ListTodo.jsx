import '../css/ListTodo.css';

export default function ListTodo({todoList}){
    return (
        <ul>
            {
                todoList.map((item, idx) =>
                    <li key={idx} className="checkbox-circle">
                        <input type="checkbox" id={item} value={item}/>
                        <label htmlFor={item}>{item}</label>
                    </li> )
            }
        </ul>
    )
}

// <div className="item">
//     <div className="checkbox-circle2">
//         <input type="checkbox" id="checkbox-circle" name="check">
//             <label htmlFor="checkbox-circle">Check one</label>
//     </div>
// </div>
// https://alvarotrigo.com/blog/css-checkbox-styles/
