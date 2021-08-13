import React, {useRef} from 'react';

import './style/TaskOpenComment.scss';
import {CommentType} from "../TaskOpenType";
import {TaskAddedComment} from "../TaskAddedComment";

interface TaskCommentProps {
    comments: CommentType[]
}

const TaskComment = ({comments}: TaskCommentProps): JSX.Element => {
    const commentValue = useRef<HTMLInputElement>(null);

    //console.log(commentValue.current?.value)

    function viewInputValue() {
        console.log(commentValue.current?.value)
    }

    const [value, setValue] = React.useState('');

    function changeEvent(event:any) {
        setValue(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="task-open-comment">
                return (
                    <div>
                        <h2 className="task-open-subtitle">
                           Discussion
                        </h2>
                        <form action="">
                            <img className="task-open-comment-preview task-open-comment-preview--form" src={''} alt=""/>
                            <input ref={commentValue} onClick={changeEvent} className="task-open-input" type="text" placeholder="Add a comment…"/>
                        </form>
                    </div>
                )
            <TaskAddedComment comments={comments}/>
        </div>
    );
};

export {TaskComment};
