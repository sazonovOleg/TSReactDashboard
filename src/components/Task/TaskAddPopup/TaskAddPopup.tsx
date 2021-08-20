import React, {useRef, useState} from 'react';
import './style/TaskAddPopup.scss';
import {TASK_CATEGORY, TaskType} from "../TaskOpen/TaskOpenType";
import {SIDEBAR_PROFILE} from "../../Sidebar";

interface TaskAddPopupProps {
    title: string,
    onClickCreateTask: (task: TaskType) => void,
    onClose: () => void
}

const TaskAddPopup = ({title, onClickCreateTask, onClose}: TaskAddPopupProps): JSX.Element => {
    const [taskTitle, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

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

    console.log(newAddedTask)

    return (
        <div className="task-popup">
            <div className="task-popup-container">
                <h2 className="task-popup-title">
                    {title}
                </h2>
                <span className="task-popup-close" onClick={onClose}>&times;</span>
                <div className="form">
                    <div className="form-col">
                        <h3 className="form-title">
                            Title
                        </h3>
                        <input
                            onChange={(event => setTitle(event.target.value))}
                            value={taskTitle}
                            type="text"
                            className="form-input form-input--title"/>
                    </div>
                    <div className="form-col">
                        <h3 className="form-title">
                            Description
                        </h3>
                        <textarea
                            onChange={(event => setDescription(event.target.value))}
                            value={description}
                            className="form-input form-input--textarea"/>
                    </div>
                    <button
                        disabled={!Boolean(taskTitle) || !Boolean(description)}
                        onClick={() => {
                            onClickCreateTask(newAddedTask)
                            onClose()}
                        }>
                        Create Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export {TaskAddPopup};
