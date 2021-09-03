import styled from 'styled-components'

const StyledSidebarProfile = styled.div`
  width: 100%;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  display: flex;
  flex-direction: row;
  color: #fff;
  background-color: #202020;

  .sidebar-name {
    padding-bottom: .3rem;
  }

  .sidebar-setup {
    margin-left: 1rem;
  }
`

const Avatar = styled.img`
  max-width: 48px;
  margin-right: .9rem;
`

export { StyledSidebarProfile, Avatar }