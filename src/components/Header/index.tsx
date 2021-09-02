import React from 'react';
import {HeaderSettings} from "./HeaderSettings/";

import {HEADER_MENU,MEN_IN_PROJECT,TITLE_INFO} from "./data";

import { StyledCol, StyledHeader, StyledHeaderMenu, StyledHeaderSetup, StyledHeaderTitle, StyledLogo } from './style'

const Header = (): JSX.Element => {
    const [title, setNewTitle] = React.useState(TITLE_INFO.title)

    const clickTitle = () => {
        setNewTitle('Новый Тайтл')
    }

    return (
        <StyledHeader>
            <StyledCol>
                <StyledHeaderTitle>
                    <StyledLogo src={TITLE_INFO.logo} alt='logo' className="logo" />
                    {title}
                </StyledHeaderTitle>
                <StyledHeaderSetup onClick={clickTitle}>
                    ...
                </StyledHeaderSetup>
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