import React from 'react';
import classNames from "classnames";

import './styles/HeaderButton.scss';

export interface HeaderButtonProps {
    children?: any,
    share?: any,
    chat?: any,
}

const  HeaderButton = ({children,share,chat}:HeaderButtonProps): JSX.Element => {
  return (
      <button className={classNames('button',{
          'button--share': share,
          'button--chat': chat,
      })}>
          {children}
      </button>
  );
};

export {HeaderButton};
