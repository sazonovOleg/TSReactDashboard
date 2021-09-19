import projectOne from '../../assets/sidebar/projects/Icon.svg'
import projectTwo from '../../assets/sidebar/projects/Icon-2.svg'
import projectThree from '../../assets/sidebar/projects/Icon-3.svg'
import projectFour from '../../assets/sidebar/projects/Icon-4.svg'
import teamOne from '../../assets/sidebar/team/logo.svg'
import teamTwo from '../../assets/sidebar/team/logo-2.svg'
import teamThree from '../../assets/sidebar/team/logo-3.svg'
import { SidebarMenuProps } from './SidebarMenu/type'

const MAIN_MENU: SidebarMenuProps = {
    title: 'MENU',
    items: [
        { title: 'Home' },
        { title: 'My Tasks' },
        { title: 'Notifications', notification: 3 },
    ],
}


export { MAIN_MENU }