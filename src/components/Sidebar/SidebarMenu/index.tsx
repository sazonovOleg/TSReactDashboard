import React from 'react'
import {SidebarMenuProps} from "./SidebarMenuType";
import {
    StyledMenu,
    StyledTitle,
    StyledList,
    StyledListItem,
    StyledBtn,
    StyledPreview,
    StyledNotifications, StyledUserAvatar,
} from './style'

const SidebarMenu = ({title, items, button, addButton}: SidebarMenuProps): JSX.Element => {
    return (
        <StyledMenu>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledList>
                {items.map(({title, notificationCount, preview, users}, index) => {
                    return (
                        <StyledListItem key={title}>
                            {Boolean(preview) && <StyledPreview src={preview} alt="preview"/>}
                            {title}
                            {Boolean(notificationCount) &&
                            <StyledNotifications>{notificationCount}</StyledNotifications>}
                            {Boolean(users?.length) &&
                            <div>{users?.map((userAvatar, index) =>
                                <StyledUserAvatar key={userAvatar} src={userAvatar} alt=""/>)}
                            </div>}
                        </StyledListItem>
                    )
                })}
            </StyledList>
            {button && <StyledBtn onClick={addButton}>{button}</StyledBtn>}
        </StyledMenu>
    )
}

export {SidebarMenu}
