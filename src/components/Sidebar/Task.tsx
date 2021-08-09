import React from 'react';
import {TaskProps} from "../../interfaces/interfaceHeaderProps";

import './styles/Task.scss'

const Task = ({info}: TaskProps): JSX.Element => {
    return (
        <div className="task container">
            {info?.map(({taskCount, taskText,}, index) => {
                return (
                    <div className="task-col" key={index}>
                        <h2 className="task-title">
                            {taskCount}
                        </h2>
                        <p className="task-text">
                            {taskText}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export {Task}