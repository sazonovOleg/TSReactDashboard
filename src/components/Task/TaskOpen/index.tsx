import React from 'react'

import { TaskComment } from './TaskOpenCommment'
import { TaskType } from './TaskOpenType'
//TODO решить вопрос с большим импортом
import {
    StyledTask,
    StyledPanel,
    StyledPanelTitle,
    StyledAuthor,
    StyledHeader,
    StyledPreview,
    StyledInfo,
    StyledTaskWrap,
    StyledTag,
    StyledFollower,
    StyledRename,
    StyledSubtitle,
    StyledColumn,
    StyledHeaderWrap,
    StyledTitle,
    StyledRow,
    StyledDescription,
    StyledDescriptionText,
    StyledDescriptionTextarea, StyledCheckbox,
} from './style'

import avatar1 from '../../../assets/taskslist/preview.svg'
import avatar2 from '../../../assets/taskslist/preview-2.svg'
import avatar3 from '../../../assets/taskslist/preview-3.svg'

interface TaskOpenProps {
    task: TaskType,
    onTaskChecked: (task: TaskType) => void
    renameTaskInfo: (task: TaskType) => void
}

const TaskOpen = ({ task, onTaskChecked, renameTaskInfo }: TaskOpenProps): JSX.Element => {
    const [defaultTitle, setNewTitles] = React.useState<string>('')
    const [defaultDescription, setNewDescription] = React.useState('')
    const [isShowFollowers, setShowFollowers] = React.useState<boolean>(false)
    const [addedFollower, addNewFollower] = React.useState<number>()
    const [isEditTitle, setIsEditTitle] = React.useState<boolean>(false)
    const [isEditDescription, setIsEditDescription] = React.useState<boolean>(false)
    const titleRef = React.useRef<HTMLDivElement>(null)
    const descriptionRef = React.useRef<HTMLHeadingElement>(null)

    const [keysHistory, setKeysHistory] = React.useState<string[]>([])

    React.useEffect(() => {
        const result = keysHistory.join('')
        const isEnterShiftTaped: boolean = result.includes('ControlEnter') || result.includes('EnterControl')

        if (isEnterShiftTaped) {
            setNewInfo()
            setKeysHistory([])
        }
    }, [keysHistory])

    //TODO заменить на реальный массив
    const allFollowers: string[] = [avatar1, avatar2, avatar3]

    const handleDone = (task: TaskType): void => {
        const newTask: TaskType = {
            ...task,
            isDone: !task.isDone,
        }
        onTaskChecked(newTask)
    }

    const setNewInfo = (): void => {
        const newTask: TaskType = {
            ...task,
            title: defaultTitle,
            description: defaultDescription,
        }
        setTimeout(() => {
            setIsEditTitle(false)
            setIsEditDescription(false)
        }, 1)

        renameTaskInfo(newTask)
    }
    const setFollowers = () => setShowFollowers(!isShowFollowers)
    const addNewFollowers = (follower: string) => addNewFollower(task.followers.push(follower))
    const handleKeyboardEvent = (event: any) => setKeysHistory([...keysHistory, event.key])

    //TODO подрефакторить
    //TODO Пофиксить скрипт
    const titleOutsideClick = (e: any) => (!e.path.includes(titleRef.current) ? setIsEditTitle(false)
        : setIsEditTitle(true))

    const descriptionOutsideClick = (e: any) => !e.path.includes(descriptionRef.current) ? setIsEditDescription(false)
        : setIsEditDescription(true)

    React.useEffect(() => {
        setNewTitles(task.title || '')
        setNewDescription(task.description || '')
    }, [task])

    React.useEffect(() => {
        document.body.addEventListener('click', titleOutsideClick)
        document.body.addEventListener('click', descriptionOutsideClick)

        return () => {
            document.body.removeEventListener('click', titleOutsideClick)
            document.body.removeEventListener('click', descriptionOutsideClick)
        }
    }, [])

    return (
        <StyledTask>
            <StyledColumn>
                <StyledHeader>
                    <StyledHeaderWrap ref={titleRef}>
                        {isEditTitle ? (<StyledPanel>
                                <StyledPanelTitle
                                    onChange={event => setNewTitles(event.target.value)}
                                    value={defaultTitle}
                                    onKeyUp={event => handleKeyboardEvent(event)} />
                                <StyledRename onClick={setNewInfo}>Save</StyledRename>
                            </StyledPanel>) :
                            <StyledTitle dangerouslySetInnerHTML={{ __html: defaultTitle }}
                                         onClick={() => setIsEditTitle(true)} />}
                    </StyledHeaderWrap>
                    <StyledRow>
                        {/*TODO вынести в отдельный компонент checkbox*/}
                        <StyledCheckbox
                            type='checkbox'
                            checked={task.isDone}
                            onChange={() => handleDone(task)} />
                        <label></label>
                        <div className='btn-set'>
                            <span>...</span>
                        </div>
                    </StyledRow>
                </StyledHeader>
                <StyledRow>
                    <StyledAuthor>{task.author}</StyledAuthor>
                    <StyledAuthor>{' ' + task.createdAt}</StyledAuthor>
                </StyledRow>
            </StyledColumn>
            <StyledInfo>

                <StyledColumn>
                    <StyledSubtitle>
                        Assign To
                    </StyledSubtitle>
                    <StyledRow>
                        <StyledPreview src={task.avatar} alt='' />
                        {task.author}
                    </StyledRow>
                </StyledColumn>

                <StyledColumn>
                    <StyledSubtitle>
                        Due On
                    </StyledSubtitle>
                    <StyledRow>
                        {task.dueOn}
                    </StyledRow>
                </StyledColumn>

                <StyledColumn>
                    <StyledSubtitle>
                        Tag
                    </StyledSubtitle>
                    {task.tag.map((tag) => <StyledTag className={tag} key={tag}>{tag}</StyledTag>)}
                </StyledColumn>

                <StyledColumn>
                    <StyledSubtitle>
                        Followers
                    </StyledSubtitle>
                    <StyledRow>
                        {task.followers.map((follower) => <img key={follower} src={follower} />)}
                        <button className='add' onClick={setFollowers}>+</button>
                    </StyledRow>
                </StyledColumn>

                {/*TODO Разобраться с followers*/}
                {isShowFollowers &&
                //TODO добавить StyledFollowers
                <div className='wrap'>{allFollowers.map((followers) =>
                    <img key={followers} onClick={() => addNewFollowers(followers)} src={followers} />)}
                    <span className='close' onClick={setFollowers}>&times;</span>
                </div>}
            </StyledInfo>

            <StyledDescription>
                <StyledSubtitle>
                    Description
                </StyledSubtitle>
                <StyledColumn ref={descriptionRef}>
                    {isEditDescription ? (
                            <StyledPanel>
                                <StyledDescriptionTextarea
                                    value={defaultDescription}
                                    onChange={event => {
                                        setNewDescription(event.target.value)
                                    }}
                                    onKeyUp={event => handleKeyboardEvent(event)} />
                                <StyledRename onClick={setNewInfo}>Save</StyledRename>
                            </StyledPanel>) :
                        <StyledDescriptionText onClick={() => setIsEditDescription(true)}>
                            {defaultDescription}
                        </StyledDescriptionText>}
                </StyledColumn>
            </StyledDescription>

            <TaskComment comments={task.comments} />
        </StyledTask>
    )
}

export { TaskOpen }
