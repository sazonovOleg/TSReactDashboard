import styled from 'styled-components'

const StyledMenu = styled.nav`
  padding-bottom: 2.2rem;

  &:last-child {
    li {
      justify-content: space-between;
    }
  }
  
  .preview {
    margin-right: .6rem;
  }

  .user-avatar {
    margin: {
      left: .3rem;
      right: .3rem;
    };
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 1.2rem;
  color: #878787;
  text-transform: uppercase;
  font-size: .8rem;
`

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const StyledListItem = styled.li`
  padding-bottom: 1.2rem;
  display: inline-flex;
  align-items: center;
  font-size: .9rem;
  color: #fff;
  .notifications {
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
  }
`

const StyledBtn = styled.button`
    cursor: pointer;
    color: #FFC200;
    opacity: .75;

    &:hover {
      opacity: 1;
    }
`

export { StyledMenu, StyledTitle, StyledList, StyledListItem, StyledBtn }