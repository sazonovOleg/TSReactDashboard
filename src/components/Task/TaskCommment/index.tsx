import React from 'react'
import { CommentType } from '../type'
import { TaskAddedComment } from './AddComment'

import avatar from '../../../assets/sidebar/avatar.png'
import { Button, BUTTON_STYLE } from '../../Button'

import {
    StyledBlock,
    StyledWrap,
    StyledTextarea,
    StyledSubtitle,
    StyledPreview,
    StyledBtnWrap,
    StyledColumn,
} from './style'
import { getLoginUser } from '../../../service/user'

interface TaskCommentProps {
    comments: CommentType[]
}

const TaskComment = ({ comments }: TaskCommentProps): JSX.Element => {
    const [comment, setComment] = React.useState<number>()
    const [userInfo, setUserInfo] = React.useState<any | undefined>()
    const inputRef = React.useRef<HTMLTextAreaElement>(null)

    //TODO разобраться с типизацией documentData
    React.useEffect(() => {
        getLoginUser().then(function(loginUserData: any) {
            setUserInfo(loginUserData)
        })
    }, [setUserInfo])
    
    const addNewComment = (): void => {
        const date: Date = new Date()

        const dateInfo = {
            day: date.getDate(),
            hours: date.getHours(),
            min: date.getMinutes(),
        }

        if (inputRef.current?.value != '' && userInfo) {
            setComment(comments.unshift({
                name: userInfo.firstName,
                position: userInfo.position,
                createdAt: `${dateInfo.day + 'at' + ' ' + dateInfo.hours + ':' + dateInfo.min + 'pm'}`,
                preview: userInfo.preview,
                comment: inputRef.current?.value,
            }))
            inputRef.current?.classList.remove('warning')
        } else {
            inputRef.current?.classList.add('warning')
            setTimeout(() => inputRef.current?.classList.remove('warning'), 750)
        }
    }

    const resizeInputComment = () => {
        inputRef.current?.classList.add('size')
    }

    const handleOutsideClick = (e: any) => {
        if (!e.path.includes(inputRef.current)) {
            inputRef.current?.classList.remove('size')
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <StyledBlock>

            <StyledColumn>
                <StyledSubtitle>
                    Discussion
                </StyledSubtitle>
                <StyledWrap>
                    {userInfo && <StyledPreview src={userInfo.avatar} alt='' />}
                    <StyledTextarea ref={inputRef} onClick={resizeInputComment} />
                </StyledWrap>

                <StyledBtnWrap>
                    <Button
                        onClick={addNewComment}
                        variant={BUTTON_STYLE.SUCCESS}>
                        + Add comment
                    </Button>
                </StyledBtnWrap>
            </StyledColumn>
            <TaskAddedComment comments={comments} />
        </StyledBlock>
    )
}

export { TaskComment }
