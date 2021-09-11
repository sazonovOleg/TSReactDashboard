import React from 'react';
import { Button } from '../../Button'
import { StyledPopup, StyledTitle, StyledClose, StyledColumn, StyledWrapper, StyledInput, StyledText } from './style'

interface SidebarPopupProps {
    showSidebar: () => void
}

const SidebarPopup = ({showSidebar}: SidebarPopupProps): JSX.Element => {

  return (
      <StyledPopup>
          <StyledColumn>
              <StyledTitle>
                  Add a New Team
              </StyledTitle>
              <StyledClose onClick={showSidebar}>&times;</StyledClose>
              <StyledWrapper>
                  <StyledText>
                      Name
                  </StyledText>
                  <StyledInput type="text"/>
                  <StyledText>
                      Members
                  </StyledText>
                  <StyledInput type="text"/>
              </StyledWrapper>
              <Button onClick={() => console.log()}>
                  Create Team
              </Button>
          </StyledColumn>
      </StyledPopup>
  );
};

export { SidebarPopup };
