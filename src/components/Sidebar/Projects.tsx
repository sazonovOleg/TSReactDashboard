import React from "react";
import {ProjectsMenuType} from "../../types/modulesType";

import './styles/Projects.scss'

const Projects =({title,list,btn}:ProjectsMenuType):JSX.Element => {
    return (
        <nav className="projects container">
            <h2 className="projects-title">
                {title}
            </h2>
            <ul className="projects-list">
                {list?.map(({logo,name,btn}, index) => {
                    return (
                        <li className="projects-item" key={index}>
                            <img src={logo} alt="logo"/>
                            <span>{name}</span>
                            <a>{btn}</a>
                        </li>
                    )
                })}
            </ul>
            <a className="projects-btn">{btn}</a>
        </nav>
    )
}

export {Projects}