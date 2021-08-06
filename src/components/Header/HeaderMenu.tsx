import React from 'react';

export type MenuItemType = {
    title:string,
    url:string
}

export interface HeaderProps {
    title:string,
    menu?:MenuItemType[]
}

const HeaderMenu = ({menu}:HeaderProps):JSX.Element => {
    return(
        <div>
            {menu && <nav className="header-menu">
                {menu.map(({url,title}) =>{
                    return (
                        <a href={url}>{title}</a>
                    )
                })}
            </nav>}
        </div>
    )
}

export default HeaderMenu;