import styled from 'styled-components'

export const StyledTaskInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 1.2rem;
  color: #fff;

`

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  flex: 0 0 50%;
`

export const TaskInfoTitle = styled.h2`
  font-size: 20px;
  padding-bottom: .3rem;
`

export const TaskInfoText = styled.p`
  font-size: 12px;
  opacity: 0.5;
`