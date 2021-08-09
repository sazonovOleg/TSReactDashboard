import React from 'react'

import '../styles/Menu.scss'


type SidebarMenuItem = {
    title: string
    notificationCount?: number
    preview?: string
    users?: string[]
}

export interface SidebarMenuProps {
    title: string
    items: SidebarMenuItem[]
}

const SidebarMenu = ({title, items}: SidebarMenuProps): JSX.Element => {
    return (
        <nav className="menu container">
            <h2 className="menu-title">
                {title}
            </h2>
            <ul className="menu-list">
                {items.map(({title, notificationCount, preview, users}, index) => {
                    return (
                        <li className="menu-item" key={title}>
                            {Boolean(preview) && <img src={preview} alt="preview"/>}
                            {title}
                            {Boolean(notificationCount) &&
                            <span className="menu-item--notifications">{notificationCount}</span>}
                            {Boolean(users?.length) &&
                            <div>{users?.map((userAvatar, index) => <img key={userAvatar} src={userAvatar}
                                                                         alt=""/>)}</div>}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export {SidebarMenu}
