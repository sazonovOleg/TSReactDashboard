import React from 'react';
import {HeaderSettings} from "./HeaderSettings/HeaderSettings";
import {HeaderProps} from "./HeaderType";

import {HEADER_MENU,MEN_IN_PROJECT} from "./data";

import './styles/index.scss';


const Header = ({title, btn}: HeaderProps): JSX.Element => {
    return (
        <header className="header">
            <div className="header-col">
                <h1 className="header-title">
                    <svg className="header-logo" width="40" height="41" viewBox="0 0 40 41" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.546875" width="40" height="40" rx="8" fill="#FFC200"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40"
                              height="41">
                            <rect y="0.546875" width="40" height="40" rx="8" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path
                                d="M21.9072 4.55848C20.7083 2.70745 21.2338 0.235276 23.0819 -0.968087L45.9238 -15.841C47.7783 -17.0485 50.2607 -16.5208 51.4637 -14.6635L77.523 25.5704C78.7219 27.4214 78.1965 29.8936 76.3483 31.097L53.5064 45.9699C51.652 47.1774 49.1695 46.6497 47.9665 44.7924L21.9072 4.55848Z"
                                fill="#753AD7"/>
                            <path
                                d="M25.2549 27.4297C25.2549 34.2684 19.7278 39.7987 12.9264 39.7987C6.12507 39.7987 0.597961 34.2684 0.597961 27.4297C0.597961 20.5911 6.12507 15.0607 12.9264 15.0607C19.7278 15.0607 25.2549 20.5911 25.2549 27.4297Z"
                                stroke="#FF0000" strokeWidth="6"/>
                        </g>
                    </svg>
                    {title}
                </h1>
                <div className="header-setup">
                    {btn}
                </div>
                {HEADER_MENU && <nav className="header-menu">
                    {HEADER_MENU.map(({url, title}, index) => {
                        return (
                            <a href={url} key={index}>{title}</a>
                        )
                    })}
                </nav>}
            </div>
            <HeaderSettings img={MEN_IN_PROJECT}/>
        </header>
    )
}

export {Header}