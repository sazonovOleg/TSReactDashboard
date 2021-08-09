import {MenInProject, MenuItemType, SideBarMenuListType, TaskInfoType} from "../types/modulesType";

export interface HeaderProps {
    title:string,
    menu?:MenuItemType[],
    btn:string
}

export interface HeaderSetProps {
    img?:MenInProject[]
}

export interface HeaderProfileProps {
    images:string,
    name:string,
    position:string
}

//задать вопрос про функцию-интерфейс
export interface TaskProps {
    info?:TaskInfoType[]
}

export interface SideBarListProps {
    listItem?: SideBarMenuListType[]
}