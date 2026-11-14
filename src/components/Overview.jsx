import { useState } from "react"
import TaskModal from "./TaskModal.jsx"
import { icons } from "../icons.jsx"
import "../styles/Overview.css"
export default function Overview({ onAddTasks, onFilterChange, goalsList, addGoal, deleteGoal})
{
    const [showTaskModal, setShowTaskModal] = useState(false);

    function handleAddGoal(event)
    {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get("goalName").trim();
        if(!value)
            return;
        addGoal(value);
        event.currentTarget.reset();
    }

    return( 
    <>  
    <aside>
        <h1 className="app-name">Todo</h1>
        <section className="account">
            <h2 title="Account" className="account-name">{icons.account} Guest</h2>
        </section>
        <section className="menu">
            <h2>menu</h2>
            <nav>
                <button type="button" onClick={()=>setShowTaskModal(true)}>
                    {icons.newTask}
                    <span>Add New Task</span>
                </button>

                <a href="#all-tasks" onClick={(event)=>{
                    event.preventDefault();
                    onFilterChange("all");
                }}>
                    {icons.allTasks}
                    <span>All Tasks</span>
                </a>

                <a href="#uncompleted" onClick={(event)=>{
                    event.preventDefault();
                    onFilterChange("uncompleted");
                }}>
                    {icons.uncompleted}
                    <span>Uncompleted</span>
                </a>

                <a href="#completed" onClick={(event)=>{
                    event.preventDefault();
                    onFilterChange("completed")
                }}>
                    {icons.completed}
                    <span>Completed</span>
                </a>
                <details>
                   <summary>{icons.goals}<span>My Goals</span></summary>
                    <ul>
                        {goalsList.map((goal,index)=>(
                            <li key={index}>
                                <a href={`#goal-${index}`}>
                                    {goal}
                                </a>
                                <button onClick={() => deleteGoal(index)}>{icons.delete}</button>
                            </li>
                        ))}
                        <li>
                            <form onSubmit={handleAddGoal}>
                                <input type="text"
                                        name="goalName"
                                       placeholder="Enter what you want to achieve..."
                               />
                                <button type="submit">+ Add Goal</button>
                            </form>
                        </li>
                    </ul>
                </details>
            </nav>
        </section>
       <a className="login" href="login.html">
            {icons.login}
            <span>Log in</span>
        </a>
    </aside>
    {showTaskModal && (
        <TaskModal onClose={()=>setShowTaskModal(false)}
                   onSave={(newTasks)=>{
                        onAddTasks(newTasks);
                        setShowTaskModal(false);
                   }}
        />
    )}
    </>
    )
}