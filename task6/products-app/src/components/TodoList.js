import {useDispatch, useSelector} from "react-redux";
import {useContext} from "react";
import {FilterContext} from "../contexts/FilterContext";
import withFilter from "../hoc/withFilter";
import {toggleTodo} from "../actions/todoActions";


const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const { filter } = useContext(FilterContext)

    const filteredTodos = withFilter(todos, filter)

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <u>
            {filteredTodos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => handleToggleTodo(todo.id)}
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                >
                    {todo.text}
                </li>

            ))}
        </u>
    )
}

export default TodoList