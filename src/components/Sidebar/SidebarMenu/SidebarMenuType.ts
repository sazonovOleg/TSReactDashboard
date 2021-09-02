type SidebarMenuItem = {
    title: string
    notificationCount?: number
    preview?: string
    users?: string[]
}

export interface SidebarMenuProps {
    title: string
    items: SidebarMenuItem[],
    button?: string,
    addButton?: () => void
}