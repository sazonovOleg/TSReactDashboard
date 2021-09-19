import React from 'react'
import { MAIN_MENU } from '../data'
import {getMenuProjects} from '../../../service/projects'
import {getTeams} from '../../../service/teams'
import {
    StyledMenu,
    StyledTitle,
    StyledList,
    StyledListItem,
    StyledBtn,
    StyledPreview,
    StyledNotifications,
    StyledCol,
    StyledUserAvatar,
    StyledWrap,
} from './style'

interface SidebarMenuProps {
    addButton: () => void
}

const SidebarMenu = ({addButton}: SidebarMenuProps): JSX.Element => {
    const [projectsState, setProjects] = React.useState<any | undefined>()
    const [teamsState, setTeams] = React.useState<any | undefined>()

    React.useEffect(() => {
        getMenuProjects().then(function(menuProjectsData) {
            setProjects(menuProjectsData)
        })
    },[setProjects])
    
    React.useEffect(() => {
        getTeams().then(function(teamsData) {
            setTeams(teamsData)
        })
    }, [setTeams])

    return (
        <StyledMenu>
            <StyledCol>
                <StyledTitle>{MAIN_MENU.title}</StyledTitle>
                <StyledList>
                    {MAIN_MENU.items?.map(({title, notification}) => {
                        return (
                            <StyledListItem>
                                {title}
                                {notification && <StyledNotifications>{notification}</StyledNotifications>}
                            </StyledListItem>
                        )
                    })}
                </StyledList>
            </StyledCol>

            {projectsState && <StyledCol>
                <StyledTitle>{projectsState.title}</StyledTitle>
                <StyledList>
                    {projectsState.projects.map(({projectLogo, projectName}:any) => {
                        return (
                            <StyledListItem>
                                <StyledPreview src={projectLogo} alt='preview' />
                                {projectName}
                            </StyledListItem>
                        )
                    })}
                </StyledList>
                <StyledBtn onClick={addButton}>{projectsState.button}</StyledBtn>
            </StyledCol>}

            {teamsState && <StyledCol>
                <StyledTitle>{teamsState.title}</StyledTitle>
                <StyledList>
                    {teamsState.items.map(({teamName}:any) => {
                        return (
                            <StyledListItem>
                                {teamName}
                            </StyledListItem>
                        )
                    })}
                </StyledList>
                <StyledBtn onClick={addButton}>{teamsState.button}</StyledBtn>
            </StyledCol>}
        </StyledMenu>
    )
}

export { SidebarMenu }
