import styled from 'styled-components'

const StyledBlock = styled.section`
  padding-top: 1rem;
`

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
`

const StyledTextarea = styled.textarea`
  padding: 1rem;
  width: 100%;
  font-size: .85rem;
  outline: none;
  resize: none;
  border: 1px solid #fff;
  border-radius: .4rem;
  background-color: #efefef;
  transition: .3s all ease-in;

  &.warning {
    border-color: #ff0000;
  }

  &.size {
    padding-top: 1.5rem;
    padding-bottom: 3.5rem;
  }
`

const StyledBtnWrap = styled.button`
  padding-top: 1rem;
  align-self: flex-end;
`

const StyledPreview = styled.img`
  max-width: 48px;
  margin-right: .8rem;
`

const StyledSubtitle = styled.h2`
  padding-bottom: .8rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2rem;
  text-transform: uppercase;
`

export { StyledBlock, StyledWrap, StyledTextarea, StyledBtnWrap, StyledPreview, StyledSubtitle }