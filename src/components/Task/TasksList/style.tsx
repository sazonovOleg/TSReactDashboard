import styled from 'styled-components'

export const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const StyledCol = styled.div`
  padding: 1.2rem;
  margin-bottom: .8rem;
  background-color: #F7F6F3;
  border-radius: 10px;
  cursor: pointer;
  //TODO сделать пропсы
  &.active {
    background-color: #ffeec0;

    &:hover {
      background-color: #ffeec0;
    }
  }

  &:hover {
    background-color: #FFF8DD;
  }
`

export const StyledRow = styled.div`
  padding-bottom: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const StyledPreview = styled.img`
  margin-right: .6rem;
`

export const StyledPosition = styled.span`
  padding: .4rem;
  text-transform: uppercase;
  line-height: 1.2rem;
  border-radius: .4rem;
  //TODO сделать пропсы 
  &.development {
    background-color: #FFF1E2;
    color: #ED6400;
  }

  &.marketing {
    background-color: #F5F0FF;
    color: #764CED;
  }

  &.design {
    background-color: #E3EFFF;
    color: #1975D0;
  }
`

export const StyledTitle = styled.h2`
  width: 100%;
  font-size: 26px;
  line-height: 38px;
  font-weight: bold;
`

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`