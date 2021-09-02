import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 2.2rem 2rem .8rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
`

const StyledHeaderTitle = styled.title`
  display: inline-flex;
  align-items: center;
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 47px;
  color: #131313;
`

const StyledCol = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const StyledHeaderMenu = styled.menu`
  padding-left: 0;
  padding-top: 1.5rem;
  flex: 0 0 100%;

  a {
    font-size: 1rem;
    margin-right: 1.8rem;
    color: #131313;
    text-decoration: none;
  }
`

const StyledLogo = styled.img`
  margin-right: 1.5rem;
`

const StyledHeaderSetup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #EAEAEA;
  text-align: center;
`

export { StyledHeader, StyledHeaderMenu, StyledHeaderTitle, StyledCol, StyledLogo ,StyledHeaderSetup}