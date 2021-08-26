import React, {useState} from 'react';

import {TaskAddPopup} from "../TaskAddPopup/TaskAddPopup";
import {TaskType} from "../TaskOpen/TaskOpenType";

import './style/TasksList.scss';
import {Button, BUTTON_STYLE} from "../../Button";

interface TasksListProps {
    tasks: TaskType[],
    title: string,
    isOpenTaskId: number
    onTaskClick: (task: TaskType) => void,
    onTaskChecked:(task:TaskType) => void,
    onTaskCreated:(task:TaskType) => void
}

const TasksList = ({tasks, title, isOpenTaskId, onTaskClick, onTaskChecked, onTaskCreated}: TasksListProps): JSX.Element => {
    const [selectedTitle, setActiveTitle] = React.useState<TaskType["title"]>(' ');
    const [isShowModal, setShowModal] = useState<boolean>(false)
    const createTask = (task:TaskType) => {
        onTaskCreated(task);
    }

    const handleDone = (task:TaskType): void => {
        const newTask: TaskType = {
            ...task,
            isDone: !task.isDone
        }

        onTaskChecked(newTask)
    }
    
    return (
        <div className="tasks-list">
            <div className="tasks-list-wrap row row--jb">
                <h2 className="app-title">
                    {title}
                </h2>
                <Button onClick={() => {
                    setShowModal(true)
                }} variant={BUTTON_STYLE.SUCCESS}>+ Add Task</Button>
            </div>
            {tasks.map((task) => {
                return (
                    <div className={"tasks-list-col" + ' ' + `${isOpenTaskId === task.id ? "active" : " "}`}
                         key={task.title}>
                        <div className="tasks-list-wrap row">
                            <input type="checkbox"
                                   onChange={() => handleDone(task)}
                                   checked={task.isDone}
                                   className="checkbox"/>
                            <label className="tasks-list-text"
                                   onClick={() => onTaskClick(task)}
                                   onChange={() => {setActiveTitle(task.title)}}>
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
            {isShowModal && (
                <TaskAddPopup onClickCreateTask={createTask} title={title} onClose={() => {
                    setShowModal(false)
                }}/>
            )}
        </div>
    )
};

export {TasksList};
