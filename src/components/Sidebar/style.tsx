import styled from 'styled-components'

const SidebarWrap = styled.div`
  max-width: 270px;
  width: 100%;
  height: 100vh;
  background: #000000;
  overflow-y: scroll;
`

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const SidebarLogo = styled.img`
  margin-right: 1rem;
`

const SearchIcon = styled.img`
  max-width: 20px;
`

const SidebarTitle = styled.title`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
`

export { SidebarLogo, SearchIcon, SidebarWrap, SidebarTitle, SidebarHeader }