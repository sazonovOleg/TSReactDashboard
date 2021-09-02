import React from "react";
import {HeaderSetProps} from "../HeaderType";
import {Button, BUTTON_STYLE} from "components/Button";

import './styles/HeaderSettings.scss'

const HeaderSettings = ({img}:HeaderSetProps): JSX.Element => {
    return (
        <div className="header-settings">
            <div className="header-settings-row">
                {img?.map(({images},index) => {
                    return (
                        <img className="header-settings-ava" src={images} key={index} alt=""/>
                    )
                })}
            </div>

            <Button onClick={()=>{}}>Share</Button>
            <Button onClick={()=>{}} variant={BUTTON_STYLE.WARNING}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.53846 0C8.59727 0 11.0769 2.47965 11.0769 5.53846C11.0769 8.59727 8.59727 11.0769 5.53846 11.0769C4.38084 11.0769 3.30634 10.7215 2.41765 10.1143L0.235218 10.8417L0.962673 8.65931C0.355376 7.77058 0 6.69609 0 5.53846C0 2.47965 2.47965 0 5.53846 0ZM12.1219 5.17683C14.3694 5.88223 16 7.98126 16 10.4615C16 11.6192 15.6446 12.6937 15.0373 13.5824L15.7648 15.7648L13.5824 15.0373C12.6937 15.6446 11.6192 16 10.4615 16C7.98105 16 5.88192 14.3692 5.17669 12.1214C5.29684 12.1279 5.41739 12.1319 5.53846 12.1319C6.4281 12.1319 7.29167 11.9574 8.10521 11.6133C8.89048 11.2811 9.5955 10.8059 10.2007 10.2007C10.8059 9.5955 11.2812 8.89048 11.6133 8.10521C11.9574 7.29168 12.1319 6.4281 12.1319 5.53846C12.1319 5.41742 12.1284 5.29688 12.1219 5.17683Z"
                          fill="#FFC200"/>
                </svg>
                Chat
            </Button>
        </div>
    )
}

export {HeaderSettings}