export default function ListTodo({todoList}){
    return (
        <ul>
            { todoList.map((item, idx) => <li key={idx}>{item}</li>) }
        </ul>
    )
}