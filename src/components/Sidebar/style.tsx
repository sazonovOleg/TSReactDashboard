import styled from 'styled-components'

const SidebarWrap = styled.div`
    max-width: 270px;
    width: 100%;
    height: 100vh;
    background: #000000;
    overflow-y: scroll;
`

const SidebarLogo = styled.img`
    margin-right: 1rem;
`

const SearchIcon = styled.img`
    max-width: 20px;
`

export {SidebarLogo, SearchIcon, SidebarWrap}