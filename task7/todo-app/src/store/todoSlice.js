import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            if(!response.ok) {
                throw new Error('server error')
            }
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading'
            state.error = null
        }).addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload
        }).addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
    }
})

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions
export default todoSlice.reducer