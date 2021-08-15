import React from 'react';

import {TaskType} from "./TaskOpenType";

import './style/TaskOpen.scss'
import {TaskComment} from "./TaskOpenCommment";

interface TaskOpenProps {
    task: TaskType
}

const TaskOpen = ({task}: TaskOpenProps): JSX.Element => {
    return (
        <div className="task-open">
            <div className="task-open-header">
                <h2 className="app-title app-title--open">
                    {task.title}
                    <div className="wrap">
                        <span className="task-open-by">{task.author}</span>
                        <span className="task-open-by">{' ' + task.createdAt}</span>
                    </div>
                </h2>
                <div className="task-open-wrap row">
                    <input type="checkbox" className="task-open-checkbox"/>
                    <a className="task-open-set">
                        ...
                    </a>
                </div>
            </div>
            <div className="task-open-info">

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Assign To
                    </h3>
                    <div className="row">
                        <img src={task.avatar} alt=""/>
                        {task.author}
                    </div>
                </div>

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Due On
                    </h3>
                    <div className="row">
                        {task.dueOn}
                    </div>
                </div>

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Tag
                    </h3>
                    {task.tag.map((tag) => <span className={"task-open-tag" + ' ' + `task-open-tag--${tag}`}>{tag}</span>)}
                </div>

                <div className="col">
                    <h3 className="task-open-subtitle">
                        Followers
                    </h3>
                    <div className="row">
                        {task.followers.map((follower) => <img src={follower}/>)}
                    </div>
                </div>
            </div>

            <div className="task-open-description">
                <h2 className="task-open-subtitle">
                    Description
                </h2>
                <p className="task-open-text">
                    {task.description}
                </p>
            </div>

            <TaskComment comments={task.comments}/>
        </div>
    );
};

export {TaskOpen};
