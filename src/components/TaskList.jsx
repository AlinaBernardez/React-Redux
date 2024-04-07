import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, toggleComplete } from '../redux/taskSlice'
import { useState } from 'react'


const TaskList = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleAddTask = () => {
        if(text) {
            dispatch(addTask(text))
            setText('')
        }
    }

    const handleCompleted = (id) => {
        dispatch(toggleComplete(id))
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className='App'>
            <input type='text' value={text} onChange={handleInput}/>
            <button onClick={handleAddTask}>Add task</button>
            <ul>
            { tasks.length > 0 ? tasks.map(task => (
                <li key={task.id} style={{ textDecoration : task.completed ? 'line-through' : 'none'}}>
                    {task.text}
                    <button onClick={() => handleCompleted(task.id)}>{task.completed ? 'No completada' : 'Completada'}</button>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete task</button>
                </li>
            )) : (
                <p>No tasks created</p>
            )}
            </ul>
        </div>
    )
}

export default TaskList