import avatar from '../../assets/sidebar/avatar.png'
import projectOne from '../../assets/sidebar/projects/Icon.svg'
import projectTwo from '../../assets/sidebar/projects/Icon-2.svg'
import projectThree from '../../assets/sidebar/projects/Icon-3.svg'
import projectFour from '../../assets/sidebar/projects/Icon-4.svg'
import teamOne from '../../assets/sidebar/team/logo.svg'
import teamTwo from '../../assets/sidebar/team/logo-2.svg'
import teamThree from '../../assets/sidebar/team/logo-3.svg'
import { SidebarMenuProps } from './SidebarMenu/SidebarMenuType'
import { SidebarHeaderProps } from './SidebarHeader'

const SIDEBAR_PROFILE: SidebarHeaderProps = {
    images: avatar,
    name: 'Emilee Simchenko',
    position: 'Product Owner',
    info: [
        { taskCount: 372, taskText: 'Completed Tasks' },
        { taskCount: 11, taskText: 'Open Tasks' },
    ],
}

const SIDEBAR: SidebarMenuProps[] = [{
    title: 'MENU',
    items: [
        { title: 'Home' },
        { title: 'My Tasks' },
        { title: 'Notifications', notificationCount: 3 },
    ],
}, {
    title: 'PROJECTS',
    items: [
        { preview: projectOne, title: 'Dashboard UI Kit' },
        { preview: projectTwo, title: 'CRM System' },
        { preview: projectThree, title: 'Website Redesign' },
        { preview: projectFour, title: 'Communication Tool' }],
    button: '+ Add a Project',
},
    {
        title: 'Teams',
        items: [
            {
                title: 'Designers',
                users: [
                    teamOne,
                    teamTwo,
                    teamThree,
                ],
            },
            {
                title: 'Backend',
                users: [
                    teamOne,
                    teamTwo,
                    teamThree,
                ],
            },
            {
                title: 'Frontend',
                users: [
                    teamOne,
                    teamTwo,
                    teamThree,
                ],
            },
        ],
        button: '+ Add a Team',
    }]

export { SIDEBAR, SIDEBAR_PROFILE }