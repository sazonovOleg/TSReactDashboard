import React from "react";
import {SidebarTaskProps} from "./SidebarTaskType";

import './style/SidebarTask.scss'

const SidebarTask = ({info}: SidebarTaskProps): JSX.Element => {
    return (
        <div className="sidebar-task container">
            {info?.map(({taskCount, taskText,}, index) => {
                return (
                    <div className="sidebar-task-col" key={index}>
                        <h2 className="sidebar-task-title">
                            {taskCount}
                        </h2>
                        <p className="sidebar-task-text">
                            {taskText}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export {SidebarTask};