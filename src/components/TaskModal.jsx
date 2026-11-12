import "../styles/TaskModal.css"
import { icons } from "../icons.jsx"
import { useState } from "react";

function createTask()
{
    return {
        id: crypto.randomUUID(),
        time: "",
        title: ""
    };
}

export default function TaskModal({ onClose, onSave})
{
    const [tasks,setTasks] = useState(()=>[createTask()]);
    const [error,setError] = useState("");

    function updateTask(id,field,value)
    {
        setTasks(prev=>
            prev.map(task=>
                task.id === id
                ? {...task,[field]:value}
                : task
            )
        );
    }

    function deleteTask(id)    
    {
        setTasks(prev=>
            prev.filter(task=>
                task.id !== id
            )
        );
    }

    function addTask()
    {
        setTasks(prev => [...prev,createTask()]);
        setError("")
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        const validTasks = tasks.filter(
            task => task.title.trim() !== ""
        ).map(task => ({
            ...task,
            title: task.title.trim()
        }));

        if(validTasks.length === 0)
        {
            setError("Please enter at least one task.");
            return;
        }

        onSave(validTasks);
    }

    return (
        <div className="modal-overlay"
             onClick={onClose}>
            <section className="task-modal"
                     role="dialog"
                     aria-modal="true"
                     aria-labelledby="model-title"
                     onClick={event => event.stopPropagation()}>
                <header className="modal-header">
                    <div>
                        <h2 id="modal-title"> Create Your Task 🌸</h2>
                        <p>Plan your day, one task at a time.</p>
                    </div>
                    <button type="button"
                            className="close-btn"
                            aria-label="Close popup"
                            onClick={onClose}
                    >
                        X
                    </button>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="task-modal-list">
                        <div className="task-modal-labels">
                            <span>Time</span>
                            <span>Tasks</span>
                            <span>Delete</span>
                        </div>
                        {tasks.map(task=>(
                            <div className="task-modal-row" key={task.id}>
                                <input type="time"
                                       value={task.time}
                                       onChange={e=>updateTask(task.id,"time",e.target.value)}/>
                                <input type="text"
                                        value={task.title}
                                         placeholder="Enter task..."
                                        onChange={e=>updateTask(task.id,"title",e.target.value)}/>
                                <button className="delete-task-btn" type="button"
                                        aria-label="Delete task" onClick={()=>deleteTask(task.id)}>
                                        {icons.delete}
                                </button>
                            </div>  
                        ))}
                    </div>

                     {error && (
                        <p className="modal-error">{error}</p>
                    )}

                    <button type="button" className="add-task-btn" onClick={addTask}>
                        + Add New Task
                    </button>
                    <footer className="modal-footer">
                        <button className="cancel-btn" type="button" onClick={onClose}>Cancel</button>
                        <button className="save-btn" type="submit">Save Tasks</button>
                    </footer>
                </form>
             </section>
        </div>
    )
}