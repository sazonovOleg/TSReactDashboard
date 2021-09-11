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

export const StyledCheckbox = styled.input`
    position: absolute;
    z-index: 0;
    opacity: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;

    + label {
      display: inline-flex;
      align-items: flex-start;
      user-select: none;

      &:before {
        margin-top: .1rem;
        content: '';
        display: inline-block;
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #e3e3e3;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='13' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.4149 1.25372C14.6348 0.473652 13.3667 0.469652 12.5826 1.24972L5.99775 7.83826L3.41343 5.25405C2.63333 4.47398 1.36517 4.47398 0.585073 5.25405C-0.195024 6.03411 -0.195024 7.30222 0.585073 8.08228L4.58557 12.0826C4.97362 12.4706 5.48569 12.6667 5.99775 12.6667C6.50981 12.6667 7.02188 12.4706 7.41393 12.0826L15.4149 4.08195C16.195 3.30189 16.195 2.03378 15.4149 1.25372Z' fill='%239B9B9B'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        background-color: #e3e3e3;
      }
    }

    &:checked + label::before {
      border-color: #CEF9C6;
      background-color: #CEF9C6;
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.5612 0.440289C10.9761 -0.144759 10.025 -0.147759 9.43693 0.437289L4.49831 5.3787L2.56007 3.44054C1.975 2.85549 1.02388 2.85549 0.438805 3.44054C-0.146268 4.02559 -0.146268 4.97667 0.438805 5.56171L3.43918 8.56196C3.73022 8.85299 4.11426 9 4.49831 9C4.88236 9 5.26641 8.85299 5.56044 8.56196L11.5612 2.56147C12.1463 1.97642 12.1463 1.02534 11.5612 0.440289Z' fill='%231D201C'/%3E%3C/svg%3E%0A");
    }
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