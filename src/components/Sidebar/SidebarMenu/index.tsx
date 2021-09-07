import React from 'react'
import {SidebarMenuProps} from "./SidebarMenuType";
import { StyledMenu, StyledTitle, StyledList, StyledListItem, StyledBtn } from './style'

const SidebarMenu = ({title, items, button, addButton}: SidebarMenuProps): JSX.Element => {
    return (
        <StyledMenu className="container">
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledList>
                {items.map(({title, notificationCount, preview, users}, index) => {
                    return (
                        <StyledListItem key={title}>
                            {Boolean(preview) && <img className="preview" src={preview} alt="preview"/>}
                            {title}
                            {Boolean(notificationCount) &&
                            <span className="notifications">{notificationCount}</span>}
                            {Boolean(users?.length) &&
                            <div>{users?.map((userAvatar, index) =>
                                <img className="user-avatar" key={userAvatar} src={userAvatar} alt=""/>)}</div>}
                        </StyledListItem>
                    )
                })}
            </StyledList>
            {button && <StyledBtn onClick={addButton}>{button}</StyledBtn>}
        </StyledMenu>
    )
}

export {SidebarMenu}
