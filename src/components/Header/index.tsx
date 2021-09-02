import React from 'react';
import {HeaderSettings} from "./HeaderSettings/";
import {HeaderProps} from "./HeaderType";

import {HEADER_MENU,MEN_IN_PROJECT,TITLE_INFO} from "./data";

import { StyledCol, StyledHeader, StyledHeaderMenu, StyledHeaderTitle, StyledLogo } from './style'


const Header = ({title, btn}: HeaderProps): JSX.Element => {
    return (
        <StyledHeader>
            <StyledCol>
                <StyledHeaderTitle>
                    <StyledLogo src={TITLE_INFO.logo} alt='logo' className="logo" />
                    {title}
                </StyledHeaderTitle>
                <div className="header-setup">
                    {btn}
                </div>
                {HEADER_MENU && <StyledHeaderMenu>
                    {HEADER_MENU.map(({url, title}, index) => {
                        return (
                            <a href={url} key={index}>{title}</a>
                        )
                    })}
                </StyledHeaderMenu>}
            </StyledCol>
            <HeaderSettings img={MEN_IN_PROJECT}/>
        </StyledHeader>
    )
}

export {Header}