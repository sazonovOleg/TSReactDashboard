export type MenuItemType = {
    title:string,
    url:string
}

export type TitleItemType = {
    title:string,
    logo:string
}

export interface HeaderProps {
    title:string,
    HEADER_MENU?:MenuItemType[],
    btn:string
}

export type MenInProject = {
    images:string
}

export interface HeaderSetProps {
    img?:MenInProject[]
}