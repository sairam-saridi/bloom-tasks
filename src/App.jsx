import { useEffect, useState } from "react";
import Overview from "./components/Overview";
import Taskboard from "./components/Taskboard";
import GoalsList from "./components/GoalsList.jsx";

const STORAGE_KEY = "bloom-tasks";

function App() {

  const [taskFilter, setTaskFilter] = useState("all");
  const [goalsList, setGoalsList] = useState([]);

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

  const filteredTasks = tasks.filter(task=>{
    if(taskFilter === "completed")
    {
       return Boolean(task.completed);
    }

    if(taskFilter === "uncompleted")
    {
      return !task.completed
    }
    return true;
  });

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

  function addGoal(goal)
  {
    setGoalsList(prev=>[...prev, goal]);
  }

  function deleteGoal(index) {
    setGoalsList(prev =>
      prev.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="app-container">
      <Overview
        onAddTasks={handleAddTasks}
        onFilterChange={setTaskFilter}
        goalsList={goalsList}
        addGoal={addGoal}
        deleteGoal={deleteGoal}
      />
      <Taskboard tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask}/>
      <GoalsList goalsList={goalsList}/> 
    </div>
  );
}

export default App;