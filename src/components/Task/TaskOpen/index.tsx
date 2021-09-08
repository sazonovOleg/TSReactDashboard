import React from 'react'

import { TaskComment } from './TaskOpenCommment'
import { TaskType } from './TaskOpenType'

import './style/TaskOpen.scss'

import avatar1 from '../../../assets/taskslist/preview.svg'
import avatar2 from '../../../assets/taskslist/preview-2.svg'
import avatar3 from '../../../assets/taskslist/preview-3.svg'

interface TaskOpenProps {
    task: TaskType,
    onTaskChecked: (task: TaskType) => void
    renameTaskInfo: (task: TaskType) => void
}

const TaskOpen = ({ task, onTaskChecked, renameTaskInfo }: TaskOpenProps): JSX.Element => {
    const [defaultTitle, setNewTitles] = React.useState(task.title)
    const [defaultDescription, setNewDescription] = React.useState(task.description)
    const [isShowFollowers, setShowFollowers] = React.useState<boolean>(false)
    const [addedFollower, addNewFollower] = React.useState<number>()
    const [isEditTitle, setIsEditTitle] = React.useState<boolean>(false)
    const [isEditDescription, setIsEditDescription] = React.useState<boolean>(false)
    const titleRef = React.useRef<HTMLDivElement>(null)
    const descriptionRef = React.useRef<HTMLHeadingElement>(null)
    console.log('TaskOpen isEditTitle', isEditTitle)
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

        setIsEditTitle(false)
        setIsEditDescription(false)
        renameTaskInfo(newTask)

    }

    const setFollowers = () => setShowFollowers(!isShowFollowers)

    const addNewFollowers = (follower: string) => addNewFollower(task.followers.push(follower))

    const handleKeyboardEvent = (event: any) => event.key === 'Enter' ? setNewInfo() : null

    //TODO подрефакторить
    const titleOutsideClick = (e:any) => !e.path.includes(titleRef.current) ? setIsEditTitle(false)
        : setIsEditTitle(true)

    const descriptionOutsideClick = (e:any) => !e.path.includes(descriptionRef.current) ? setIsEditDescription(false)
        : setIsEditDescription(true)

    React.useEffect(() => {
        setNewTitles(task.title)
        setNewDescription(task.description)
    }, [task])

    React.useEffect(()=>{
        document.body.addEventListener('click', titleOutsideClick);
        document.body.addEventListener('click', descriptionOutsideClick);

        return () => {
            document.body.removeEventListener('click', titleOutsideClick);
            document.body.removeEventListener('click', descriptionOutsideClick);
        }
    },[])

    return (
        <div className='task-open'>
            <div className='column'>
                <div className='task-open-header'>
                    <div ref={titleRef} className='task-open-title'>
                        {isEditTitle ? (
                            <div className="edit-panel">
                            <textarea className='edit-panel-title'
                                      value={defaultTitle}
                                      onChange={event => setNewTitles(event.target.value)}
                                      onKeyUp={event => handleKeyboardEvent(event)}
                            />
                            <a className='change-rename' onClick={setNewInfo}>Save</a>
                        </div>) :
                            <h2 className='app-title'
                                onClick={() => setIsEditTitle(true)}>
                                {defaultTitle}</h2>}
                    </div>
                    <div className='task-open-wrap row'>
                        <input
                            className='checkbox checkbox--xl'
                            type='checkbox'
                            checked={task.isDone}
                            onChange={() => handleDone(task)} />
                        <label></label>
                        <div className='btn-set'>
                            <span>...</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <span className='task-open-by'>{task.author}</span>
                    <span className='task-open-by'>{' ' + task.createdAt}</span>
                </div>
            </div>
            <div className='task-open-info'>

                <div className='col'>
                    <h3 className='task-open-subtitle'>
                        Assign To
                    </h3>
                    <div className='row'>
                        <img src={task.avatar} alt='' />
                        {task.author}
                    </div>
                </div>

                <div className='col'>
                    <h3 className='task-open-subtitle'>
                        Due On
                    </h3>
                    <div className='row'>
                        {task.dueOn}
                    </div>
                </div>

                <div className='col'>
                    <h3 className='task-open-subtitle'>
                        Tag
                    </h3>
                    {task.tag.map((tag) =>
                        <span key={tag} className={'task-open-tag' + ' ' + `task-open-tag--${tag}`}>{tag}</span>)}
                </div>

                <div className='col'>
                    <h3 className='task-open-subtitle'>
                        Followers
                    </h3>
                    <div className='row'>
                        {task.followers.map((follower) => <img key={follower} src={follower} />)}
                        <button className='follower-add' onClick={setFollowers}>+</button>
                    </div>
                </div>

                {isShowFollowers &&
                <div className='follower-wrap'>{allFollowers.map((followers, index) =>
                    <img key={followers} onClick={() => addNewFollowers(followers)} src={followers} />)}
                    <span className='follower-close' onClick={setFollowers}>&times;</span>
                </div>}
            </div>

            <div className='description'>
                <h2 className='task-open-subtitle'>
                    Description
                </h2>
                <div ref={descriptionRef} className='column'>
                    {isEditDescription ? (
                        <div className="edit-panel">
                            <textarea
                                className='description-text description-text--textarea'
                                value={defaultDescription}
                                onChange={event => {setNewDescription(event.target.value)}}
                                onKeyUp={event => handleKeyboardEvent(event)}
                            />
                            <a className='change-rename' onClick={setNewInfo}>Save</a>
                        </div>) :
                        <div className="description-text" onClick={() => setIsEditDescription(true)
                    }>{defaultDescription}</div>}
                </div>
            </div>

            <TaskComment comments={task.comments} />
        </div>
    )
}

export { TaskOpen }
