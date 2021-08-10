import projectOne from "../../assets/sidebar/projects/Icon.svg";
import projectTwo from "../../assets/sidebar/projects/Icon-2.svg";
import projectThree from "../../assets/sidebar/projects/Icon-3.svg";
import projectFour from "../../assets/sidebar/projects/Icon-4.svg";
import teamOne from "../../assets/sidebar/team/logo.svg";
import teamTwo from "../../assets/sidebar/team/logo.svg";
import teamThree from "../../assets/sidebar/team/logo.svg";
import {SidebarMenuProps} from "./SidebarMenu/SidebarMenuType";

const SIDEBAR: SidebarMenuProps[] = [{
    title: 'MENU',
    items: [
        {title: 'Home'},
        {title: 'My Tasks'},
        {title: 'Notifications', notificationCount: 3},
    ]
}, {
    title: 'PROJECTS',
    items: [
        {preview: projectOne, title: 'Dashboard UI Kit'},
        {preview: projectTwo, title: 'CRM System'},
        {preview: projectThree, title: 'Website Redesign'},
        {preview: projectFour, title: 'Communication Tool'},],
},
    {
        title: 'Teams',
        items: [
            {
                title: 'Designers',
                users: [
                    teamOne,
                    teamTwo,
                    teamThree
                ]
            },
            {
                title: 'Backend',
                users: [
                    teamOne,
                    teamTwo,
                    teamThree,
                ]
            },
            {
                title: 'Frontend',
                users: [
                    teamOne,
                    teamTwo,
                    teamThree,
                ]
            },
        ],
    }]

export {SIDEBAR}