import React from 'react'
import NewTask from './NewTask.jsx'

const Tasks = ({ tasks, onAdd, onDelete }) => {
    return (
        <section>
            <h2 className='text-xl font-bold text-stone-700 mb-4'>Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 ? <p className='text-stone-800 my-4 '>This Project does not have any tasks yet.</p> :
                <ul>
                    {tasks.map((task) => <li key={task.id} className='flex justify-between p-4 mt-2 rounded-md bg-stone-100 '>
                        <span>{task.text}</span>
                        <button onClick={() => onDelete(task.id)} className='text-stone-700 hover:text-red-500'>Clear</button>
                    </li>)}
                </ul>}
        </section>
    )
}

export default Tasks
