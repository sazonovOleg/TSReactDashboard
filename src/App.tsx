import React from 'react';
import {Header} from "./components/Header/";
import {Sidebar} from "./components/Sidebar";
import {TasksList} from "./components/TasksList";
import {TaskOpen} from "./components/TaskOpen";
import {SIDEBAR} from "./components/Sidebar/data";
import {TASKS_LIST} from "./components/TasksList/data";
import {TASK_OPEN} from "./components/TaskOpen/data";

import './App.scss';

function App() {
    return (
        <div className="app">
            <Sidebar menu={SIDEBAR}/>
            <div className="app-content">
                <Header title="Website" btn="..."/>
                <div className="app-container">
                    <div className="app-task">
                        {TASKS_LIST && TASKS_LIST.map((items) => {
                            return (<TasksList title={items.title} items={items.items} key={items.title}/>)
                        })}
                    </div>
                    <TaskOpen
                        title={TASK_OPEN.title}
                        subtitle={TASK_OPEN.subtitle}
                        header_items={TASK_OPEN.header_items}
                        description_items={TASK_OPEN.description_items}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
