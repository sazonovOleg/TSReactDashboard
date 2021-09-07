import styled from 'styled-components'

const StyledPopup = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    top: 0;
    left: 0;
    display: flex;
    background-color: rgba(0,0,0,0.35);
    z-index: 1;
    .popup-title {
      padding-bottom: 2rem;
    }
    .close {
      position: absolute;
      top: 1.3rem;
      right: 1.3rem;
      font-size: 1.5rem;
      font-weight: bold;
      opacity: .6;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
    .form {
      &-col {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      &-title {
        padding-bottom: .6rem;
      }
      &-input {
        padding: .5rem;
        &--textarea {
          min-height: 180px;
          resize: vertical;
        }
      }
    }
    .tasks-button {
      max-width: 100%;
    }
`

const StyledPopupContainer = styled.div`
    position: relative;
    margin-top: 3rem;
    padding: 2rem;
    max-width: 600px;
    height: max-content;
    width: 100%;
    background-color: #fff;
    z-index: 2;
`

export { StyledPopup, StyledPopupContainer }