import previewOne from "../../assets/sidebar/team/logo.svg";
import previewTwo from "../../assets/sidebar/team/logo-2.svg";
import previewThree from "../../assets/sidebar/team/logo-3.svg";
import {TaskOpenProps} from "./TaskOpenType";


const TASK_OPEN:TaskOpenProps = {
    title: 'Find top 5 customer requests',
    subtitle: 'Added by Kristin A. yesterday at 12:41pm',
    header_items: [{
        title: 'Asign To',
        preview: previewOne,
        text: 'Linzell Bowman',
    },{
        title: 'Due On',
        text: 'Tue, Dec 25',
    },{
        title: 'Tag',
        text: 'Marketing',
    },{
        title: 'Followers',
        followers: [
            previewOne,
            previewTwo,
            previewThree,
        ]
    }],
    description_items: [{
        title: 'Description',
        text: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.'
    }]
}

export {TASK_OPEN}