import React, { useState } from 'react'

const Todolist = () => {

    document.body.style.backgroundColor = 'black'

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask.trim()){
            setTasks([...tasks,newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    const moveTaskDown = (index) => {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-6 '>
        <h1 className='text-3xl text-white font-extrabold '>To - Do - List</h1>

        <div>
            <input className='bg-gray-200 rounded-sm placeholder-black my-4 w-72 h-10 p-5 mx-4 focus:outline-none focus:border-0  '
            type="text"
            placeholder='Enter a Task....'
            value={newTask}
            onChange={handleInputChange}
            />

            <button onClick={addTask} className=' bg-green-400 rounded-sm w-28 h-10 hover:bg-green-500  '>
                Add
            </button>

            <ol className='flex flex-col justify-center items-center  my-3 gap-5 '>
                {tasks.map((item, index) => {
                    return (
                     <li className='flex justify-between items-start bg-gray-200 shadow-md rounded-md p-4 w-96 ' key={index}>
                        <span className='text-left flex-1'>{item}</span>
                        <div className='flex gap-5'>
                        <button onClick={() => deleteTask(index)} className='bg-red-700 text-white w-16 rounded-lg hover:bg-red-600 '>Delete</button>

                        <button onClick={() => moveTaskUp(index)} className='bg-gray-500 rounded-md hover:bg-gray-600 '>👆</button>

                        <button onClick={() => moveTaskDown(index)} className='bg-gray-500 rounded-md hover:bg-gray-600'>👇</button>
                        </div>
                    </li>
                );
                })}
            </ol>
        </div>
    </div>
  )
}

export default Todolist