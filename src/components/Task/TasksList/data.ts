import {TASK_CATEGORY, TaskType} from "../TaskOpen/TaskOpenType";

import avatar1 from '../../../assets/taskslist/preview.svg';
import avatar2 from '../../../assets/taskslist/preview-2.svg';
import avatar3 from '../../../assets/taskslist/preview-3.svg';
import commentAva1 from '../../../assets/comments/taskopen/preview-1.png'
import commentAva2 from '../../../assets/comments/taskopen/preview-2.png'

const TASKS_LIST: TaskType[] = [{
    category: TASK_CATEGORY.BACKLOG,
    isDone: true,
    title: 'E-mail after registration so that I can confirm my address',
    author: 'Kristin A',
    avatar: avatar1,
    createdAt: 'yesterday at 12:41pm',
    assignTo: 'Linzell Bowman',
    comments: [{
        avatar: commentAva1,
        name: 'Helena',
        position: 'Designer',
        createdAt: 'Yesterday at 12:37pm',
        comment: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
    }, {
        avatar: commentAva2,
        name: 'Prescott',
        position: 'Developer',
        createdAt: 'Yesterday at 12:37pm',
        comment: 'Software quality assurance activity in which one or several humans check a program mainly',
    }],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    dueOn: 'Tue, Dec 25',
    followers: [avatar1,avatar2,avatar3],
    tag: ['development']
}, {
    category: TASK_CATEGORY.BACKLOG,
    isDone: false,
    title: 'Two-factor authentication to make my private data more secure ',
    author: 'Ivan',
    avatar: avatar2,
    createdAt: 'yesterday at 12:41pm',
    assignTo: 'Foma',
    comments: [],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    dueOn: 'Tue, Dec 25',
    followers: [avatar1,avatar2,avatar3],
    tag: ['marketing']
}, {
    category: TASK_CATEGORY.BACKLOG,
    isDone: false,
    title: 'Find top 5 customers and get reviews from them',
    author: 'Foma',
    avatar: avatar3,
    createdAt: 'yesterday at 12:41pm',
    assignTo: 'Ivan',
    comments: [],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    dueOn: 'Tue, Dec 25',
    followers: [avatar1,avatar2,avatar3],
    tag: ['design']
}, {
    category: TASK_CATEGORY.TODO,
    isDone: true,
    title: 'An option to search in current projects or in all projects',
    author: 'Kristin A',
    avatar: avatar1,
    createdAt: 'yesterday at 12:41pm',
    assignTo: 'Linzell Bowman',
    comments: [],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    dueOn: 'Tue, Dec 25',
    followers: [avatar1,avatar2,avatar3],
    tag: ['development']
}, {
    category: TASK_CATEGORY.TODO,
    isDone: false,
    title: 'Account for teams and personal in bottom style',
    author: 'Ivan',
    avatar: avatar2,
    createdAt: 'yesterday at 12:41pm',
    assignTo: 'Foma',
    comments: [],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    dueOn: 'Tue, Dec 25',
    followers: [avatar1,avatar2,avatar3],
    tag: ['marketing']
}, {
    category: TASK_CATEGORY.TODO,
    isDone: true,
    title: 'Listing on Product Hunt so that we can reach as many potential users',
    author: 'Foma',
    avatar: avatar3,
    createdAt: 'yesterday at 12:41pm',
    assignTo: 'Ivan',
    comments: [],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    dueOn: 'Tue, Dec 25',
    followers: [avatar1,avatar2,avatar3],
    tag: ['design']
}]

export {TASKS_LIST}