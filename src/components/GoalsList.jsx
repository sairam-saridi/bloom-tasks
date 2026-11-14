import { useState, useEffect } from "react";
import { icons } from "../icons.jsx"
import "../styles/GoalsList.css";

export default function GoalsList({ goalsList }) {

   const [tasks, setTasks] = useState(() => {
    const savedTasks = sessionStorage.getItem("goalsTasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
    });

    useEffect(() => {
        sessionStorage.setItem("goalsTasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (goalIndex) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [goalIndex]: [
                ...(prevTasks[goalIndex] || []),
                ""
            ]
        }));
    };

   const deleteTask = (goalIndex, taskIndex) => {
    setTasks((prevTasks) => ({
        ...prevTasks,
        [goalIndex]: prevTasks[goalIndex].filter(
            (_, index) => index !== taskIndex
        )
    }));
};

    const handleTaskChange = (goalIndex, taskIndex, value) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [goalIndex]: prevTasks[goalIndex].map((task, index) =>
                index === taskIndex ? value : task
            )
        }));
    };

    return (
        <div className="goals-container">
            <h2 id="goals-heading">My Goals</h2>

            {goalsList && goalsList.length > 0 ? (
                goalsList.map((goal, index) => (
                    <div
                        className="goals-card"
                        key={index}
                        id={`goal-${index}`}
                    >
                        <h3 className="goals-card-heading">
                            {goal}
                        </h3>

                        <div className="input-fields">

                            {(tasks[index] || []).map((task, taskIndex) => (
                                <div key={taskIndex} className="task-field">

                                    <input
                                        className="goals-checkbox"
                                        type="checkbox"
                                    />

                                    <input
                                        className="goals-input"
                                        type="text"
                                        placeholder="Add a task..."
                                        value={task}
                                        onChange={(e) =>
                                            handleTaskChange(
                                                index,
                                                taskIndex,
                                                e.target.value
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        className="goals-del-btn"
                                        onClick={() => deleteTask(index, taskIndex)}
                                    >
                                        {icons.delete}
                                        </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                className="goals-btn"
                                onClick={() => addTask(index)}
                            >
                                + Add Task
                            </button>

                        </div>
                    </div>
                ))
            ) : (
                <p className="no-goals">Add your Goals</p>
            )}
        </div>
    );
}