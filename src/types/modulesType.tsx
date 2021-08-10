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


export type ProjectsMenuListType = {
    logo: string,
    name: string,
    btn:string
}


export type ProjectsTeamListType = {
    name: string,
    logoList?:ProjectTeamLogo[],
}

export type ProjectTeamLogo = {
    logo: string
}