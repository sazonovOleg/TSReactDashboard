import { SidebarMenuProps } from './type'

const MAIN_MENU: SidebarMenuProps = {
    title: 'MENU',
    items: [
        { title: 'Home' },
        { title: 'My Tasks' },
        { title: 'Notifications', notification: 3 },
    ],
}

export { MAIN_MENU }