import {MenInProject, MenuItemType} from "../types/modulesType";

export interface HeaderProps {
    title:string,
    menu?:MenuItemType[],
    btn:string
}

export interface HeaderSetProps {
    img?:MenInProject[]
}