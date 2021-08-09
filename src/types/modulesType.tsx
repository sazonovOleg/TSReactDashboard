export type MenuItemType = {
    title:string,
    url:string
}

export type MenInProject = {
    images:string
}

export type SidebarProfileType = {
    images:string,
    name:string,
    position:string
}

export type TaskInfoType = {
    taskCount: number,
    taskText: string
}

export type SideBarMenuType = {
    title: string,
    list?: SideBarMenuListType[]
}

export type SideBarMenuListType = {
    name: string,
    notifications?: number,
}

export type ProjectsMenuType = {
    title: string,
    list?: ProjectsMenuListType[],
    btn: string
}

export type ProjectsMenuListType = {
    logo: string,
    name: string,
    btn:string
}

export type ProjectsTeamType = {
    title:string,
    list?:ProjectsTeamListType[],
    btn:string
}

export type ProjectsTeamListType = {
    name: string,
    logoList?:ProjectTeamLogo[],
}

export type ProjectTeamLogo = {
    logo: string
}