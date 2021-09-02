import styled from 'styled-components'

const StyledHeaderSetting = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & > button {
    margin-left: 10px;
  }

  .member {
    margin: 0 .4rem;
  }
`

export { StyledHeaderSetting }