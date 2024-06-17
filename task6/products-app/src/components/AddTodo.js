import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { addTodo } from '../actions/todoActions'


const AddTodo = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleAddToDO = () => {
        dispatch((addTodo(text)))
        setText('')
    }

    return(
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddToDO}>Add</button>
        </div>
    )
}

export default AddTodo