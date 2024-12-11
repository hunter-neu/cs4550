import {useSelector} from "react-redux";

const TodoList = () => {
    const {todos} = useSelector((state: any) => state.todosReducer);
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map((todo: any) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <hr/>
        </>
    );
}
export default TodoList;