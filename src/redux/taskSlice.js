import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            state.push(newTask)
        },
        deleteTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload)
            if(index !== -1) {
                state.splice(index, 1)
            }
        },
        toggleComplete: (state, action) => {
            const task = state.find(task => task.id === action.payload)
            if(task) {
                task.completed = !task.completed
            }
        }
    }
})

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions
export default taskSlice.reducer