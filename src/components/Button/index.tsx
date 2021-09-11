import React from 'react';

import {StyledButton} from "./style";

export enum BUTTON_STYLE {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING'
}

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: BUTTON_STYLE
  disabled?: boolean | undefined
}

const Button = ({children, onClick, disabled, variant = BUTTON_STYLE.DEFAULT}: ButtonProps): JSX.Element => {
  return (<StyledButton disabled={disabled} onClick={onClick} variant={variant}>{children}</StyledButton>);
};

export { Button };
