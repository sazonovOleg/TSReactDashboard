import React from 'react';

import './style/TaskOpenComment.scss';
import {CommentType} from "../TaskOpenType";
import {TaskAddedComment} from "../TaskAddedComment";
import {SIDEBAR_PROFILE} from '../../../Sidebar/data'

import avatar from '../../../../assets/sidebar/avatar.png';
import {Button, BUTTON_STYLE} from "../../../Button";

interface TaskCommentProps {
    comments: CommentType[]
}

const TaskComment = ({comments}: TaskCommentProps): JSX.Element => {
    const [comment, setComment] = React.useState<number>();

    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const date = new Date();

    const dateInfo = {
        day: date.getDate(),
        hours: date.getHours(),
        min: date.getMinutes(),
    };

    const addNewComment = () => {
        if (inputRef.current?.value != '') {
            setComment(comments.unshift({
                name: SIDEBAR_PROFILE.name,
                position: SIDEBAR_PROFILE.position,
                createdAt: `${dateInfo.day + 'at' + ' ' + dateInfo.hours + ':' + dateInfo.min + 'pm'}`,
                avatar: SIDEBAR_PROFILE.images,
                comment: inputRef.current?.value
            }))
            inputRef.current?.classList.remove('warning');
        }
        else {
            inputRef.current?.classList.add('warning')
            setTimeout(() => inputRef.current?.classList.remove('warning'), 750)
        }
    };

    const resizeInputComment = () => {
        inputRef.current?.classList.add('size')
    }

    const handleOutsideClick = (e:any) => {
        if (!e.path.includes(inputRef.current)) {
            inputRef.current?.classList.remove('size')
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    },[])

    return (
        <div className="task-open-comment">
            <div className="column">
                <h2 className="task-open-subtitle">
                    Discussion
                </h2>
                <div className="wrap">
                    <img className="task-open-comment-preview task-open-comment-preview--form" src={avatar} alt=""/>
                    <textarea ref={inputRef} onClick={resizeInputComment} className="task-open-input"/>
                </div>

                <div className="comment-btn">
                    <Button
                        onClick={addNewComment}
                        variant={BUTTON_STYLE.SUCCESS}>
                        + Add comment
                    </Button>
                </div>
            </div>
            <TaskAddedComment comments={comments}/>
        </div>
    );
};

export {TaskComment};
