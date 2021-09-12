import React from 'react'
import { TasksList } from './TasksList'
import { TaskOpen } from './TaskOpen'
import { TASK_CATEGORY, TaskType } from './type'
import { TASKS_LIST } from './data'
import { StyledProject, StyledProjectWrap } from './style'
import { db, getTask } from '../../service/firebase'

const Task = (): JSX.Element => {
    const [tasks, setTasks] = React.useState<TaskType[]>(TASKS_LIST)

    console.log(TASKS_LIST)
    console.log(getTask(db))

    const openedTask = tasks.find(task => task.isOpened) || TASKS_LIST[0]
    const todoTasks = tasks.filter((task) => task.category === TASK_CATEGORY.TODO)
    const backlogTasks = tasks.filter((task) => task.category === TASK_CATEGORY.BACKLOG)

    const handleDone = (checkedTask: TaskType) => {
        const newTasks = tasks.map((task) => {
            if (task.id === checkedTask.id) {
                return checkedTask
            }
            return task
        })
        setTasks(newTasks)
    }

    const setOpenedTask = (openedTask: TaskType) => {
        const newTasks = tasks.map((task) => {
            return {
                ...task,
                isOpened: openedTask.id === task.id,
            }
        })
        setTasks(newTasks)
    }

    const createNewTask = (newTask: TaskType) => {
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    const changeTaskInfo = (newTaskInfo: TaskType) => {
        const newTasks = tasks.map((task) => {
            if (task.id === newTaskInfo.id) {
                return newTaskInfo
            }
            return task
        })
        setTasks(newTasks)
    }

    return (
        <StyledProject>
            <StyledProjectWrap>
                <TasksList title={'BACKLOG'}
                           isOpenTaskId={openedTask.id}
                           tasks={backlogTasks}
                           onTaskClick={setOpenedTask}
                           onTaskChecked={handleDone}
                           onTaskCreated={createNewTask}
                />
                <TasksList title={'TODO'}
                           isOpenTaskId={openedTask.id}
                           tasks={todoTasks}
                           onTaskClick={setOpenedTask}
                           onTaskChecked={handleDone}
                           onTaskCreated={createNewTask}
                />
            </StyledProjectWrap>
            <TaskOpen task={openedTask} onTaskChecked={handleDone} renameTaskInfo={changeTaskInfo} />
        </StyledProject>
    )
}

export { Task }
