import { useState } from "react"
import TaskModal from "./TaskModal.jsx"
import { icons } from "../icons.jsx"
import "../styles/Overview.css"
export default function Overview({ onAddTasks })
{
    const [projectList, setProjectList] = useState([])
    const [showTaskModal, setShowTaskModal] = useState(false);

    function addProject(event)
    {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get("projectName").trim();
        if(!value)
            return;
        setProjectList(prev => [...prev,value]);
        event.currentTarget.reset();
    }

    function deleteProject(prj)
    {
        setProjectList(prevlist => prevlist.filter(list => list !== prj))
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

                <a href="#all-tasks">
                    {icons.allTasks}
                    <span>All Tasks</span>
                </a>

                <a href="#uncompleted">
                    {icons.uncompleted}
                    <span>Uncompleted</span>
                </a>

                <a href="#completed">
                    {icons.completed}
                    <span>Completed</span>
                </a>
                <details>
                   <summary>{icons.project}<span>My Projects</span></summary>
                    <ul>
                        {projectList.map((list,index)=>(
                            <li key={index}>
                                <a href={`#${list}`}>
                                    {list}
                                </a>
                                <button onClick={() => deleteProject(list)}>{icons.delete}</button>
                            </li>
                        ))}
                        <li>
                            <form onSubmit={addProject}>
                                <input type="text"
                                        name="projectName"
                                       placeholder="Enter Project Name"
                               />
                                <button type="submit">+ Add Project</button>
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