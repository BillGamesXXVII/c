import React, { useState } from 'react'


const Cpisok = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){

        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function toMoveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toMoveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

  return (
    <div className='Cpisok'>
        <h1>Список</h1>
        <div>
            <input
            type='text'
            placeholder='Ввод...'
            value={newTask}
            onChange={handleInputChange}/>
            <button className='OKb'onClick={addTask}>OK</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='udalB'
                onClick={() => deleteTask(index)}               
                >🚫</button>
                <button className='vverx'
                onClick={() => toMoveTaskUp(index)}>
                    ↟
                </button>
                <button className='vniz'
                onClick={() => toMoveTaskDown(index)}               
                >↡</button>
            </li>
        )}
        </ol>
    </div>
  )
}

export default Cpisok