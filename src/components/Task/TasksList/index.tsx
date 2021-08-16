import React, {useState} from 'react';

import './style/TasksList.scss';
import {TasksButton} from "./TasksButton";
import {TaskType} from "../TaskOpen/TaskOpenType";

interface TasksListProps {
    tasks: TaskType[],
    title: string,
    onTaskClick: (task: TaskType) => void,
    handleChange?: () => void,
}

const TasksList = ({tasks, title, onTaskClick}: TasksListProps): JSX.Element => {
    const [checked, setChecked] = useState<TaskType[]>(tasks);
    const [selectedName, setSelectedName] = useState<TaskType["title"]>(' ');

    const handleChange = () => {
        setChecked(items =>
            items.map(item => ({
                ...item,
                isDone: !item.isDone
            }))
        );
    };

    console.log(checked)

    return (
        <div className="tasks-list">
            <div className="tasks-list-wrap row row--jb">
                <h2 className="app-title">
                    {title}
                </h2>
                <TasksButton text="+ Add Task"/>
            </div>
            {checked.map((task) => {
                return (
                    <div className={"tasks-list-col" + ' ' + `${selectedName === task.title ? "active" : " "}`}
                         key={task.title}>
                        <div className="tasks-list-wrap row">
                            <label className="tasks-list-text"
                                   onClick={() => onTaskClick(task)}
                                   onChange={() => {setSelectedName(task.title)}}>
                                <input type="checkbox"
                                       onChange={handleChange}
                                       checked={task.isDone}
                                       className="tasks-list-checkbox"
                                />
                                {task.title}
                            </label>
                        </div>
                        <div className="tasks-list-wrap row row--ac">
                            <img className="tasks-list-preview" src={task.avatar} alt=""/>
                            {task.tag.map((tag) => <span key={tag} className={'tasks-list-position' + ' ' + `tasks-list-position--${tag}`}>{tag}</span>)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export {TasksList};
