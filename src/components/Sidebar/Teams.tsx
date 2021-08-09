import React from "react";
import {ProjectsTeamType} from "../../types/modulesType";

const Teams = ({title,list,btn}:ProjectsTeamType):JSX.Element => {
    console.log(list)
    return(
        <nav className="teams">
            <h2 className="teams-title">
                {title}
            </h2>
            <ul className="teams-list">
                {list?.map(({name}, index) => {
                    return (
                        <li className="menu-item" key={index}>
                            {name}
                        </li>
                    )
                })}
            </ul>
            <a className="teams-btn">{btn}</a>
        </nav>
    )
}

export {Teams}