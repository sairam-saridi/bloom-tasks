import "../styles/Taskboard.css"
import { icons } from "../icons.jsx"

export default function Taskboard({ tasks })
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
                                <span className="task-time">{task.time}</span>
                            )}
                            <span className="task-title">{task.title}</span>
                            <input type="checkbox"/>
                            <button type="button">{icons.delete}</button>
                        </div>
                    ))
                )}
            </div>
        </main>
    )

}