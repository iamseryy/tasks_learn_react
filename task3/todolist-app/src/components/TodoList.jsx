import {useState} from "react";
import {Button, TextField, Card, CardContent, Typography, IconButton, CardHeader} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
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
                        <Card className={styles.card}>
                            <CardContent className={styles.content}>
                                <Typography variant="h6">
                                    {task.task}
                                </Typography>
                                <div className={styles.delete}>
                                    <IconButton aria-label="delete" color="primary" onClick={deleteTask}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>

                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}