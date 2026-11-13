import { icons } from "../icons.jsx"
import "../styles/Taskboard.css"
import Colors from "../colors.js"


export default function Taskboard({ tasks, updateTask, deleteTask })
{

    return (
        <main className="tasks-section">
            <h2 id="tasks-heading">My Daily Tasks 🌸</h2>
            <div className="tasks">
                {tasks.length === 0 ? (
                    <h2 className="no-tasks">No tasks yet. Add your first task!</h2>
                ) : (
                    tasks.map(task => (
                        <div className="task-card" key={task.id}>
                            {task.time && (
                                <input
                                    className="task-time"
                                    type="time"
                                    value={task.time}
                                    onChange={e => updateTask(task.id, "time", e.target.value)}
                                />
                            )}
                            <div className="title-checkbox" style={{ backgroundColor: Colors()}}>
                                <input
                                    className="task-title"
                                    value={task.title}
                                    onChange={e => updateTask(task.id, "title", e.target.value)}
                                />
                                <input type="checkbox"
                                       value={task.completed}
                                       checked={Boolean(task.completed)}
                                       onChange={e=>updateTask(task.id,"completed",e.target.checked)}
                                />
                            </div>
                            <button className="delete-task-btn" type="button"
                            onClick={()=>deleteTask(task.id)}
                            >{icons.delete}</button>
                        </div>
                    ))
                )}
            </div>
        </main>
    )

}