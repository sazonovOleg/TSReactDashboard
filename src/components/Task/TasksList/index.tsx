import React, {useState} from 'react';
import {TaskAddPopup} from "../TaskPopup";
import {TaskType} from "../type";
import {Button, BUTTON_STYLE} from "../../Button";

import {
    StyledTaskList,
    StyledCol,
    StyledRow,
    StyledPosition,
    StyledPreview,
    StyledTitle,
    StyledLabel,
    StyledCheckbox,
} from './style'

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
                        <StyledRow>
                            <StyledCheckbox
                                type="checkbox"
                                onChange={() => handleDone(task)}
                                checked={task.isDone} />
                            <StyledLabel onChange={() => {setActiveTitle(task.title)}}>
                                {task.title}
                            </StyledLabel>
                        </StyledRow>
                        <StyledRow>
                            <StyledPreview src={task.avatar} alt=""/>
                            {task.tag.map((tag) => <StyledPosition key={tag} className={tag}>{tag}</StyledPosition>)}
                        </StyledRow>
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
