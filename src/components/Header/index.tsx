import React from 'react';

export type MenuItemType = {
    title:string,
    url:string
}

interface HeaderProps {
    title:string,
    menu?:MenuItemType[]
}

const Header = ({title, menu}:HeaderProps):JSX.Element => {
    return (
        <header className="header">
            <h1 className="header-title">
                {title}
            </h1>
            <div className="header-settings">
                <a href="/">

                </a>
            </div>
            {menu && <nav className="header-menu">
                {menu.map(({url,title}) =>{
                    return (
                        <a href={url}>{title}</a>
                    )
                })}
            </nav>}

        </header>
    )
}

export { Header }