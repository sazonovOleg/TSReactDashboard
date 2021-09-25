import React from 'react'
import { HeaderSettings } from './HeaderSettings'
import { HEADER_MENU } from './data'

import {
    StyledCol,
    StyledHeader,
    StyledHeaderMenu,
    StyledHeaderSetup,
    StyledHeaderTitle,
    StyledLogo,
} from './style'

interface HeaderProps {
    info: string[]
}

const Header = ({info}:HeaderProps): JSX.Element => {

    return (
        <div>
            <StyledHeader>
                <StyledCol>
                    <StyledHeaderTitle>
                        <StyledLogo src={info[1]} alt='logo' className='logo' />
                        {info[0]}
                    </StyledHeaderTitle>
                    <StyledHeaderSetup>
                        ...
                    </StyledHeaderSetup>
                    {HEADER_MENU && <StyledHeaderMenu>
                        {HEADER_MENU.map(({ url, title }, index) => {
                            return (
                                <a href={url} key={index}>{title}</a>
                            )
                        })}
                    </StyledHeaderMenu>}
                </StyledCol>
                <HeaderSettings />
            </StyledHeader>
        </div>
    )
}

export { Header }