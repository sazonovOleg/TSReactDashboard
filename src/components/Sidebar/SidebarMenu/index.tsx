import React from 'react'

import {SidebarMenuProps} from "./SidebarMenuType";

import './style/SidebarMenu.scss'

const SidebarMenu = ({title, items, button, addButton}: SidebarMenuProps): JSX.Element => {
    return (
        <nav className="menu container">
            <h2 className="menu-title">
                {title}
            </h2>
            <ul className="menu-list">
                {items.map(({title, notificationCount, preview, users}, index) => {
                    return (
                        <li className="menu-item" key={title}>
                            {Boolean(preview) && <img className="menu-preview" src={preview} alt="preview"/>}
                            {title}
                            {Boolean(notificationCount) &&
                            <span className="menu-item--notifications">{notificationCount}</span>}
                            {Boolean(users?.length) &&
                            <div>{users?.map((userAvatar, index) =>
                                <img className="menu-user-avatar" key={userAvatar} src={userAvatar} alt=""/>)}</div>}
                        </li>
                    )
                })}
            </ul>
            {button && <button onClick={addButton} className="menu-btn">{button}</button>}
        </nav>
    )
}

export {SidebarMenu}
