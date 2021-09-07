import React from 'react';
import {TasksButton} from "../../Task/TasksButton";
import {StyledPopup, StyledTitle, StyledClose} from './style'

interface SidebarPopupProps {
    showSidebar: () => void
}

const SidebarPopup = ({showSidebar}: SidebarPopupProps): JSX.Element => {
    const text = 'Create Team'

  return (
      <StyledPopup>
          <div className="column">
              <StyledTitle>
                  Add a New Team
              </StyledTitle>
              <StyledClose onClick={showSidebar}>&times;</StyledClose>
              <div className="wrapper">
                  <p className="text">
                      Name
                  </p>
                  <input className="popup-input" type="text"/>
                  <p className="text">
                      Members
                  </p>
                  <input className="popup-input" type="text"/>
              </div>
              <TasksButton text={text}/>
          </div>
      </StyledPopup>
  );
};

export { SidebarPopup };
