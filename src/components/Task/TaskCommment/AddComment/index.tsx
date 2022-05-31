import React from 'react'
import { CommentType } from '../../type'

import {
    StyledComment,
    StyledDate,
    StyledHeader,
    StyledInfo,
    StyledName,
    StyledPreview,
    StyledSection,
    StyledText,
    StyledWrapper,
} from './styled'

interface TaskAddedCommentProps {
    comments: CommentType[]
}

const TaskAddedComment = ({ comments }: TaskAddedCommentProps): JSX.Element => {
    return (
        <StyledSection>
            {comments?.map(comment => {
                return (
                    <StyledComment key={comment.name}>
                        <StyledPreview src={comment.preview} alt='preview' />
                        <StyledWrapper>
                            <StyledHeader>
                                <StyledInfo>
                                    <StyledName>{comment.name}</StyledName>
                                    {' ' + comment.position}
                                </StyledInfo>
                                <StyledDate>{comment.createdAt}</StyledDate>
                            </StyledHeader>
                            <StyledText>
                                {comment.comment}
                            </StyledText>
                        </StyledWrapper>
                    </StyledComment>
                )
            })}
        </StyledSection>
    )
}

export { TaskAddedComment }
