import React, {useState} from 'react';
import {TaskType} from "../TaskOpen/TaskOpenType";
import {SIDEBAR_PROFILE} from "../../Sidebar/data";
import {TasksButton} from "../TasksButton";
import './style/TaskAddPopup.scss';

import {StyledPopup, StyledPopupContainer} from './style'
import { StyledCol } from '../../../commonStyled/StyledCol'

interface TaskAddPopupProps {
    title: string,
    onClickCreateTask: (task: TaskType) => void,
    onClose: () => void
}

const TaskAddPopup = ({title, onClickCreateTask, onClose}: TaskAddPopupProps): JSX.Element => {
    const [taskTitle, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    //ToDo переписать таску
    const newAddedTask: TaskType = {
        id: Date.now(),
        category: title,
        isDone: false,
        title:taskTitle,
        author: SIDEBAR_PROFILE.name,
        avatar: '',
        createdAt: 'Now',
        assignTo: '',
        dueOn: 'Tue, Dec 25',
        tag: ['development'],
        followers: [],
        comments: [],
        description,
        isOpened: false
    }

    return (
        <StyledPopup>
            <StyledPopupContainer>
                <h2 className="task-popup-title">
                    {title}
                </h2>
                <span className="close" onClick={onClose}>&times;</span>
                <div className="form">
                    <StyledCol>
                        <h3 className="form-title">
                            Title
                        </h3>
                        <input
                            onChange={(event => setTitle(event.target.value))}
                            value={taskTitle}
                            type="text"
                            className="form-input form-input--title"/>
                    </StyledCol>
                    <StyledCol>
                        <h3 className="form-title">
                            Description
                        </h3>
                        <textarea
                            onChange={(event => setDescription(event.target.value))}
                            value={description}
                            className="form-input form-input--textarea"/>
                    </StyledCol>
                    <TasksButton
                        text={'Create Task'}
                        onClick={() => {onClickCreateTask(newAddedTask)
                            onClose()}}
                        disabled={!Boolean(taskTitle) || !Boolean(description)}
                    />
                </div>
            </StyledPopupContainer>
        </StyledPopup>
    );
};

export {TaskAddPopup};
