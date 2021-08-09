import React from 'react'
import {SideBarMenuType} from "../../types/modulesType";

import './styles/Menu.scss'

const Menu = ({title,list}:SideBarMenuType):JSX.Element => {
    return(
        <nav className="menu container">
            <h2 className="menu-title">
                {title}
            </h2>
            <ul className="menu-list">
                {list?.map(({name,notifications}, index) => {
                    return (
                        <li className="menu-item" key={index}>
                            {name}
                            {notifications && <span className="menu-item--notifications">{notifications}</span>}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export {Menu}
