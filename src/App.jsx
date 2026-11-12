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
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks)
    );
  },[tasks]);

  function handleAddTasks(newTasks)
  {
    setTasks(prev=> [...prev,...newTasks]);
  }
  return (
    <div className="app-container">
      <Overview onAddTasks={handleAddTasks}/>
      <Taskboard tasks={tasks}/>
      {
      //<ProjectList /> 
      }
    </div>
  );
}

export default App;