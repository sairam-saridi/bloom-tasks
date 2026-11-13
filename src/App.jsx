import { useEffect, useState } from "react";
import Overview from "./components/Overview";
import Taskboard from "./components/Taskboard";

const STORAGE_KEY = "bloom-tasks";

function App() {

  const [tasks,setTasks] = useState(() => {
    try{
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
    catch(error)
    {
       console.error("Unable to load tasks:", error);
       return [];
    }
  });

  useEffect(()=>{
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
      );
    } catch(error)
    {
      console.error("Unable to save tasks:", error);
    }
   },[tasks]);

  function updateTask(id,field,value)
  {
      setTasks(prev=>
        prev.map(task=>
          task.id===id
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
      )
  }

  function handleAddTasks(newTasks)
  {
    setTasks(prev=> [...prev,...newTasks]);
  }
  return (
    <div className="app-container">
      <Overview onAddTasks={handleAddTasks}/>
      <Taskboard tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
      {
      //<ProjectList /> 
      }
    </div>
  );
}

export default App;