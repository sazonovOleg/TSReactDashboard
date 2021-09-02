import React from 'react';

import './style/style.scss'
import {TasksButton} from "../../Task/TasksButton";

interface SidebarPopupProps {
    showSidebar: () => void
}

const SidebarPopup = ({showSidebar}: SidebarPopupProps): JSX.Element => {
    const text = 'create team'

  return (
      <div className="sidebar-popup">
          <div className="column">
              <h2 className="app-title">
                  Add a New Team
              </h2>
              <span onClick={showSidebar} className="close">&times;</span>
              <div className="wrapper">
                  <p className="text">
                      Name
                  </p>
                  <input className="sidebar-popup-input" type="text"/>
                  <p className="text">
                      Members
                  </p>
                  <input className="sidebar-popup-input" type="text"/>
              </div>
              <TasksButton text={text}/>
          </div>
      </div>
  );
};

export { SidebarPopup };
