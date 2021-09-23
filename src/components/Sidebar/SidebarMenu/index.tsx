import React from 'react'
import { MAIN_MENU } from '../data'
import {getProjects} from '../../../service/projects'
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
    setNewTitle: any
}

const SidebarMenu = ({addButton, setNewTitle}: SidebarMenuProps): JSX.Element => {
    const [teamsState, setTeams] = React.useState<any | undefined>()
    const [projectsState, setProjects] = React.useState<any | undefined>()

    React.useEffect(() => {
        getProjects().then(function(menuProjectsData) {
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
                        //TODO отрефакторить
                        return (
                            <StyledListItem onClick={() => setNewTitle([projectName,projectLogo])}>
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
