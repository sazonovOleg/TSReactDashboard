import styled from 'styled-components'

export const StyledMenu = styled.nav`
  padding: 2.2rem 1.2rem;

  &:last-child {
    li {
      justify-content: space-between;
    }
  }
`

export const StyledPreview = styled.img`
  margin-right: .6rem;
`

export const StyledUserAvatar = styled.img`
  left: .3rem;
  right: .3rem;
`

export const StyledTitle = styled.h2`
  padding-bottom: 1.2rem;
  color: #878787;
  text-transform: uppercase;
  font-size: .8rem;
`

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const StyledListItem = styled.li`
  padding-bottom: 1.2rem;
  display: inline-flex;
  align-items: center;
  font-size: .9rem;
  color: #fff;
`

export const StyledNotifications = styled.span`
  width: 20px;
  height: 20px;
  margin-left: .7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFC200;
  color: #000;
  border-radius: 3rem;
  font-size: .7rem;
`

export const StyledBtn = styled.button`
  cursor: pointer;
  color: #FFC200;
  opacity: .75;

  &:hover {
    opacity: 1;
  }
`