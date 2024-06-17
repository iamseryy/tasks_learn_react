import React, {useState} from "react";
import { FilterContext } from "../contexts/FilterContext"


const TodoFilter = () => {
    const [filter, setFilter] = useState(FilterContext)


    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return(
        <div>
            <select value={filter} onChange={handleChange}>
                <option value="all">Все</option>
                <option value="completed">Выполненные</option>
                <option value="active">Активные</option>
            </select>
        </div>
    )
}

export default TodoFilter