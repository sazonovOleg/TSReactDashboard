import styled from 'styled-components'

export const StyledSidebarWrap = styled.div`
  max-width: 270px;
  width: 100%;
  height: 100vh;
  background: #000000;
  overflow-y: scroll;
`

export const StyledSidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.2rem;
`

export const StyledSidebarLogo = styled.img`
  margin-right: 1rem;
`

export const StyledSearchWrap = styled.div`
  position: relative;  
  display: block;
`

export const StyledSearchIcon = styled.img`
  max-width: 20px;
`

export const StyledSidebarTitle = styled.title`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
`