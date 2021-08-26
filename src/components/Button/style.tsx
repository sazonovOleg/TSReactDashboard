import styled from "styled-components";
import {BUTTON_STYLE} from "./index";

const getBackgroundColor = (type: BUTTON_STYLE): string => {
    switch (type) {
        case BUTTON_STYLE.SUCCESS:
            return '#a7ff96'
        case BUTTON_STYLE.WARNING:
            return '#FFF8DD'
        case BUTTON_STYLE.DEFAULT:
        default:
            return '#EAEAEA'
    }
}

const getFontColor = (type: BUTTON_STYLE): string => {
    switch (type) {

        case BUTTON_STYLE.WARNING:
            return '#FFC200'
        default:
            return '#000'
    }
}

interface StyledButtonProps {
    variant: BUTTON_STYLE
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props:StyledButtonProps) => getBackgroundColor(props.variant)};
  border-radius: 20px;
  border:none;
  font-weight: bold;
  color: ${(props:StyledButtonProps) => getFontColor(props.variant)};;
  cursor: pointer;
  transition: .4s all ease-in;
  white-space: nowrap;
`

export {StyledButton}
