import styled from 'styled-components'

const StyledPopup = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    top: 0;
    padding-top: 7rem;
    background-color: rgba(0, 0, 0, 0.37);
    .column {
      position: relative;
      padding: 1.5rem;
      max-width: 650px;
      width: 100%;
      height: max-content;
      background-color: #fff;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
    }
    .text {
      padding-bottom: 1rem;
    }
    .popup-input {
      padding: .5rem;
      margin-bottom: 1rem;
    }
`

const StyledTitle = styled.h2`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 26px;
  line-height: 38px;
  font-weight: bold;
`

const StyledClose = styled.span`
  position: absolute;
  right: .8rem;
  top: .8rem;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
`

export {StyledPopup, StyledTitle, StyledClose}