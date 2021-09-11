import React, {useState} from 'react';
import {TaskAddPopup} from "../TaskAddPopup/";
import {TaskType} from "../TaskOpen/TaskOpenType";
import {Button, BUTTON_STYLE} from "../../Button";
import './style/TasksList.scss';

import { StyledTaskList, StyledCol, StyledRow, StyledPosition, StyledPreview, StyledTitle } from './style'

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
        <StyledTaskList>
            <StyledRow>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <Button onClick={() => {
                    setShowModal(true)
                }} variant={BUTTON_STYLE.SUCCESS}>+ Add Task</Button>
            </StyledRow>
            {tasks.map((task) => {
                return (
                    <StyledCol className={isOpenTaskId === task.id ? "active" : " "}
                         key={task.title}
                         onClick={() => onTaskClick(task)}>
                        <div className="tasks-list-wrap row">
                            <input type="checkbox"
                                   onChange={() => handleDone(task)}
                                   checked={task.isDone}
                                   className="checkbox"/>
                            <label className="tasks-list-text"
                                   onChange={() => {setActiveTitle(task.title)}}>
                                {task.title}
                            </label>
                        </div>
                        <div className="tasks-list-wrap row row--ac">
                            <img className="tasks-list-preview" src={task.avatar} alt=""/>
                            {task.tag.map((tag) => <span key={tag} className={'tasks-list-position' + ' ' + `tasks-list-position--${tag}`}>{tag}</span>)}
                        </div>
                    </StyledCol>
                )
            })}
            {isShowModal && (
                <TaskAddPopup onClickCreateTask={createTask} title={title} onClose={() => {
                    setShowModal(false)
                }}/>
            )}
        </StyledTaskList>
    )
};

export {TasksList};
