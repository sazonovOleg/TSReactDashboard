export type MenuItemType = {
    title:string,
    url:string
}

export type TitleItemType = {
    title:string,
    logo:string
}

export interface HeaderProps {
    HEADER_MENU?:MenuItemType[],
}

export type MenInProject = {
    images:string
}

export interface HeaderSetProps {
    img?:MenInProject[]
}