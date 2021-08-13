import React, {useState} from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {TasksList} from "./components/TasksList";
import {TaskOpen} from "./components/TaskOpen";
import {SIDEBAR} from "./components/Sidebar/data";
import {TASKS_LIST} from "./components/TasksList/data";

import './App.scss';
import {TASK_CATEGORY, TaskType} from "./components/TaskOpen/TaskOpenType";

function App() {
    const [openedTask, setOpenedTask] = useState<TaskType>(TASKS_LIST[0])

    const todoTasks = TASKS_LIST.filter((task) => task.category === TASK_CATEGORY.TODO)
    const backlogTasks = TASKS_LIST.filter((task) => task.category === TASK_CATEGORY.BACKLOG)


    return (
        <div className="app">
            <Sidebar menu={SIDEBAR}/>
            <div className="app-content">
                <Header title="Website" btn="..."/>
                <div className="app-container">
                    <div className="app-task">
                        <TasksList title={'TODO'} tasks={todoTasks} onTaskClick={(task => {
                            setOpenedTask(task)
                        })}/>
                        <TasksList title={'BACKLOG'} tasks={backlogTasks} onTaskClick={(task => {
                            setOpenedTask(task)
                        })}/>
                    </div>
                    <TaskOpen task={openedTask} />
                </div>
            </div>
        </div>
    );
}

export default App;
