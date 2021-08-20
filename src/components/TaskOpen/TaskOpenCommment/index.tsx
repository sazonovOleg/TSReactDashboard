import React from 'react';

import './style/TaskOpenComment.scss';
import {CommentType} from "../TaskOpenType";
import {TaskAddedComment} from "../TaskAddedComment";

interface TaskCommentProps {
    comments: CommentType[]
}

const TaskComment = ({comments}: TaskCommentProps): JSX.Element => {

    return (
        <div className="task-open-comment">
            <div>
                <h2 className="task-open-subtitle">
                    Discussion
                </h2>
                <form action="">
                    <img className="task-open-comment-preview task-open-comment-preview--form" src={''} alt=""/>
                    <input className="task-open-input" type="text"
                           placeholder="Add a comment…"/>
                </form>
            </div>
            <TaskAddedComment comments={comments}/>
        </div>
    );
};

export {TaskComment};
