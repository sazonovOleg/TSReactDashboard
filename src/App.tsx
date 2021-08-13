import React from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {TasksList} from "./components/TasksList";
import {TaskOpen} from "./components/TaskOpen";
import {SIDEBAR} from "./components/Sidebar/data";
import {TASKS_LIST} from "./components/TasksList/data";

import './App.scss';
import {TASK_CATEGORY} from "./components/TaskOpen/TaskOpenType";

function App() {

    const todoTasks = TASKS_LIST.filter((task) => task.category === TASK_CATEGORY.TODO)
    const backlogTasks = TASKS_LIST.filter((task) => task.category === TASK_CATEGORY.TODO)


    return (
        <div className="app">
            <Sidebar menu={SIDEBAR}/>
            <div className="app-content">
                <Header title="Website" btn="..."/>
                <div className="app-container">
                    <div className="app-task">
                        <TasksList title={'TODO'} tasks={todoTasks}/>
                        <TasksList title={'BACKLOG'} tasks={backlogTasks}/>
                    </div>
                    {/*<TaskOpen*/}
                    {/*    title={TASK_OPEN.title}*/}
                    {/*    subtitle={TASK_OPEN.subtitle}*/}
                    {/*    header_items={TASK_OPEN.header_items}*/}
                    {/*    description_items={TASK_OPEN.description_items}*/}
                    {/*    comment_items={TASK_OPEN.comment_items}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
