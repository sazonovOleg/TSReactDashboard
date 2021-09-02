import {MenuItemType, MenInProject, TitleItemType} from "./HeaderType";

import avatar from "../../assets/header/avatar.png";
import avatar2 from "../../assets/header/avatar-2.png";
import avatar3 from "../../assets/header/avatar-3.png";

import websiteLogo from "../../assets/logos/website-logo.svg"

export const TITLE_INFO:TitleItemType = {title:'Website', logo: websiteLogo}

export const HEADER_MENU:MenuItemType[] = [
    {title:'Tasks',url: '/'},
    {title:'Kanban', url:'/'},
    {title:'Activity', url:'/'},
    {title:'Calendar', url:'/'},
    {title:'Files', url:'/'}];

export const MEN_IN_PROJECT:MenInProject[] = [
    {images: avatar},
    {images: avatar2},
    {images: avatar3}
]