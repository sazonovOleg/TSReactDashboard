import React from 'react';

import './style/TaskOpenComment.scss';
import {CommentType} from "../TaskOpenType";
import {TaskAddedComment} from "../TaskAddedComment";
import {SIDEBAR_PROFILE} from "../../../Sidebar";

import avatar from '../../../../assets/sidebar/avatar.png';

interface TaskCommentProps {
    comments: CommentType[]
}

const TaskComment = ({comments}: TaskCommentProps): JSX.Element => {
    const [comment, setComment] = React.useState<number>();

    const inputRef = React.useRef<HTMLInputElement>(null);

    const date = new Date();

    const dateInfo = {
        day: date.getDate(),
        hours: date.getHours(),
        min: date.getMinutes(),
    };

    const addNewComment = () => {
        if (inputRef.current?.value != '') {
            setComment(comments.push({
                name: SIDEBAR_PROFILE.name,
                position: SIDEBAR_PROFILE.position,
                createdAt: `${dateInfo.day + 'at' + ' ' + dateInfo.hours + ':' + dateInfo.min + 'pm'}`,
                avatar: SIDEBAR_PROFILE.images,
                comment: inputRef.current?.value
            }))
        }
    };

    return (
        <div className="task-open-comment">
            <div className="column">
                <h2 className="task-open-subtitle">
                    Discussion
                </h2>
                <form action="">
                    <img className="task-open-comment-preview task-open-comment-preview--form" src={avatar} alt=""/>
                    <input ref={inputRef} className="task-open-input" type="text" placeholder="Add a comment…"/>
                </form>
                <button onClick={addNewComment} className="btn">+ Add comment</button>
            </div>
            <TaskAddedComment comments={comments}/>
        </div>
    );
};

export {TaskComment};