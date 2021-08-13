import React from 'react';


import './style/TasksList.scss';
import {TasksButton} from "./TasksButton/";
import {TaskType} from "../TaskOpen/TaskOpenType";

interface TasksListProps {
    tasks: TaskType[]
    title: string
    onTaskClick: (task: TaskType) => void
}


const TasksList = ({tasks, title, onTaskClick}: TasksListProps): JSX.Element => {
    return (
        <div className="tasks-list">
            <div className="tasks-list-wrap row row--jb">
                <h2 className="app-title">
                    {title}
                </h2>
                <TasksButton text="+ Add Task"/>
            </div>
            {tasks.map((task) => {
                return (
                    <div className="tasks-list-col" key={task.title}>
                        <div className="tasks-list-wrap row">
                            <input type="checkbox" checked={task.isDone} className="tasks-list-checkbox"/>
                            <label className="tasks-list-text" onClick={() => onTaskClick(task)}>
                                {task.title}
                            </label>
                        </div>
                        <div className="tasks-list-wrap row row--ac">
                            <img className="tasks-list-preview" src={task.author} alt=""/>
                            {task.tag.map((tag) => <span className={'tasks-list-position'}>{tag}</span>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export {TasksList};
