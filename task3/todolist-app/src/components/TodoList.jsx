import {useState} from "react";
import {Button, TextField} from "@mui/material";
import styles from './todolist.module.scss'

export const TodoList = () => {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => {
        setTask( e.target.value)
    }

    const addTask = (event) => {
        event.preventDefault()
        if(!task.trim()) return
        setTaskList([...taskList, {id: taskList.length, task: task}])
        setTask('')
    }

    const deleteTask = (e) => {
        setTaskList(taskList.filter(comment => comment.id !== Number(e.target.closest('li').id)))
    }

    return (
        <div>
            <div>
                <TextField
                    label="Add task"
                    variant="standard"
                    onChange={handleChange}
                    value={task}
                />

                <Button
                    variant="outlined"
                    onClick={addTask}>Add</Button>
            </div>
            <ul>
                {taskList.map(task => (
                    <li className={styles.task} key={task.id} id={task.id}>
                        <p>{task.task}</p>
                        <button onClick={deleteTask}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}