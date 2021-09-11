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

  .development {
    background-color: #FFF1E2;
    color: #ED6400;
  }

  .marketing {
    background-color: #F5F0FF;
    color: #764CED;
  }

  .design {
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

  .col {
    display: flex;
    flex-direction: column;
    flex: auto;
  }

  .row {
    min-height: 20px;
    align-items: center;
  }
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