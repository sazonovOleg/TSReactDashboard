import previewOne from '../../assets/taskslist/preview.svg'
import previewTwo from '../../assets/taskslist/preview.svg'
import previewThree from '../../assets/taskslist/preview.svg'
import {TasksListProps} from "./TasksListType";

const TASKS_LIST:TasksListProps[] = [{
    title: 'Backlog',
    items: [{
        checkbox: true,
        text: 'E-mail after registration so that I can confirm my address',
        preview: previewOne,
        position: 'DEVELOPMENT'
    }, {
        checkbox: false,
        text: 'Find top 5 customers and get reviews from them',
        preview: previewTwo,
        position: 'Marketing'
    }, {
        checkbox: false,
        text: 'Two-factor authentication to make\n my private data more secure',
        preview: previewThree,
        position: 'Design'
    }]
}, {
    title: 'To Do',
    items: [{
        checkbox: true,
        text: 'An option to search in current projects or in all projects',
        preview: previewOne,
        position: 'Design'
    }, {
        checkbox: false,
        text: 'Account for teams and personal in bottom style',
        preview: previewTwo,
        position: 'Marketing'
    }, {
        checkbox: false,
        text: 'Listing on Product Hunt so that we can reach as many potential users',
        preview: previewThree,
        position: 'Design'
    }]
}]

export {TASKS_LIST}