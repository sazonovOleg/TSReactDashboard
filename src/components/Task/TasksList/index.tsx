import React, {useState} from 'react';

import {TaskAddPopup} from "../TaskAddPopup/TaskAddPopup";
import {TasksButton} from "./TasksButton";
import {TaskType} from "../TaskOpen/TaskOpenType";

import './style/TasksList.scss';

interface TasksListProps {
    tasks: TaskType[],
    title: string,
    onTaskClick: (task: TaskType) => void,
    clickCheckbox?: () => void,
    isOpenTaskId: number
    onTaskChecked:(task:TaskType) => void,
    onTaskCreated:(task:TaskType) => void
}

const TasksList = ({tasks, title, onTaskClick, isOpenTaskId, onTaskChecked, onTaskCreated}: TasksListProps): JSX.Element => {
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
                <TasksButton text="+ Add Task" onClick={()=> {
                    setShowModal(true)
                }}/>
            </div>
            {tasks.map((task) => {
                return (
                    <div className={"tasks-list-col" + ' ' + `${isOpenTaskId === task.id ? "active" : " "}`}
                         key={task.title}>
                        <div className="tasks-list-wrap row">
                            <input type="checkbox"
                                   onChange={() => handleDone(task)}
                                   checked={task.isDone}
                                   className="tasks-list-checkbox"
                            />
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
