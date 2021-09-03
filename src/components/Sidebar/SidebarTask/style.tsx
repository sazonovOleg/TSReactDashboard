import styled from 'styled-components'

const StyledTaskInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #fff;

  .col {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    flex: 0 0 50%;
  }
  
`

const TaskInfoTitle = styled.h2`
  font-size: 20px;
  padding-bottom: .3rem;
`

const TaskInfoText = styled.p`
  font-size: 12px;
  opacity: 0.5;
`


export {StyledTaskInfo, TaskInfoTitle, TaskInfoText}