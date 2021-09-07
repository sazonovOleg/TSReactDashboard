import styled from 'styled-components'

const StyledProject = styled.section`
  position: relative;
  height: 100%;
  padding: 1.8rem;
  flex-direction: row;
  display: flex;
  overflow-y: scroll;
`

const StyledProjectWrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: max-content;
  padding: 1.8rem;
  margin-right: 1.6rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: .3rem;
`

export { StyledProject, StyledProjectWrap }