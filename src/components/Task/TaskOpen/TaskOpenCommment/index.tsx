import React from 'react';

import './style/TaskOpenComment.scss';
import {CommentType} from "../TaskOpenType";
import {TaskAddedComment} from "../TaskAddedComment";

import avatar from '../../../../assets/sidebar/avatar.png';

interface TaskCommentProps {
    comments: CommentType[]
}

const TaskComment = ({comments}: TaskCommentProps): JSX.Element => {

    return (
        <div className="task-open-comment">
            <div className="column">
                <h2 className="task-open-subtitle">
                    Discussion
                </h2>
                <form action="">
                    <img className="task-open-comment-preview task-open-comment-preview--form" src={avatar} alt=""/>
                    <input className="task-open-input" type="text" placeholder="Add a comment…"/>
                </form>
                <button className="btn">+ Add comment</button>
            </div>
            <TaskAddedComment comments={comments}/>
        </div>
    );
};

export {TaskComment};
