export type MenuItemType = {
    title:string,
    url:string
}

export interface HeaderProps {
    title:string,
    HEADER_MENU?:MenuItemType[],
    btn:string
}

