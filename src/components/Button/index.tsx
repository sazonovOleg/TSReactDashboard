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
}

const Button = ({children, onClick, variant = BUTTON_STYLE.DEFAULT}: ButtonProps): JSX.Element => {
  return (<StyledButton onClick={onClick} variant={variant}>{children}</StyledButton>);
};

export { Button };
