import styled from 'styled-components'

export const StyledTask = styled.section`
  max-width: 650px;
  width: 100%;
  height: max-content;
  padding: 1.8rem;
  background-color: #fff;
  border-radius: .3rem;
`

export const StyledHeader = styled.div`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const StyledHeaderWrap = styled.div`
  width: 100%;
`

export const StyledRow = styled.div`
  padding-top: .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledCheckbox = styled.input`
  position: absolute;
  z-index: 0;
  opacity: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;

  + label {
    display: inline-flex;
    align-items: flex-start;
    user-select: none;

    &:before {
      margin-top: .1rem;
      content: '';
      display: inline-block;
      width: 40px;
      height: 40px;
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

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: .4rem;
  transition: .4s all ease;
  border: 1px solid rgba(0, 0, 0, 0.29);

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.29);
  }
`

export const StyledPanelTitle = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  border: none;
  resize: none;
  outline: none;
`

export const StyledRename = styled.span`
  padding-top: 1.5rem;
  font-size: 1.4rem;
  cursor: pointer;
  opacity: .75;

  &:hover {
    opacity: 1;
  }
`

export const StyledDescription = styled.div`
  display: block;
  position: relative;

  .column {
    position: relative;

    &:focus {
      .change-rename {
        opacity: 1;
      }
    }
  }
`

export const StyledDescriptionText = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 1.4rem;
  word-spacing: .0005rem;
  border: 1px solid rgba(255, 255, 255, 0.29);
  border-radius: 10px;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.29);
  }
`

export const StyledDescriptionTextarea = styled.textarea`
  width: 100%;
  min-height: 180px;
  font-size: 1rem;
  line-height: 1.4rem;
  word-spacing: .0005rem;
  border-radius: 10px;
  resize: none;
  border: none;

  &:hover {
    border: none;
  }

  &:focus {
    outline: none;
  }
`

export const StyledAuthor = styled.span`
  padding-bottom: 1.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: #131313;
`
//TODO вынести в пропсы стили Tag
export const StyledTag = styled.span`
  padding: .1rem 0;
  width: max-content;
  text-transform: uppercase;
  font-size: .9rem;

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

export const StyledTaskWrap = styled.div`
  padding-top: .5rem;
  align-items: center;
`

export const StyledTitle = styled.h2`
  width: 100%;
  min-height: max-content;
  font-size: 26px;
  line-height: 38px;
  font-weight: bold;
  resize: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: .15s all ease;
  border-radius: .4rem;
`

export const StyledSubtitle = styled.h3`
  padding-bottom: .8rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2rem;
  text-transform: uppercase;
`

export const StyledPreview = styled.img`
  margin-right: .4rem;
`

export const StyledInfo = styled.div`
  position: relative;
  padding-bottom: 1.8rem;
  margin-bottom: 1.8rem;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ECECEC;
`

export const StyledFollower = styled.div`
  .add {
    width: 1.4rem;
    height: 1.4rem;
    background-color: #EAEAEA;
    border-radius: 50%;
    color: #9B9B9B;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #5b5b5b;
    }
  }

  .wrap {
    width: 100%;
    height: max-content;
    padding: 1rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: rgba(194, 194, 194, 0.85);

    img {
      opacity: .8;
      max-width: 20px;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  .close {
    position: absolute;
    right: .41rem;
    top: .11rem;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
  }
`
export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
`