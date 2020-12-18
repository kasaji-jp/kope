import React from 'react';
import { 
  IonHeader,
  IonIcon
} from '@ionic/react';
import {settingsOutline} from 'ionicons/icons'
import styled from 'styled-components'
import { Icon } from 'ionicons/dist/types/components/icon/icon';



export const Header: React.FC = () => {
  const Box = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Img = styled.img`
    width: 44px;
    display: block;
  `;

  const IconButton = styled(IonIcon)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 24px;
    color: var(--ion-color-main);
  `;

  const Header = styled(IonHeader)`
    position: relative;
  `

  return (
    <Header
      className="ion-no-border"
    >
      <Box className='ion-padding'>
        <Img src="/assets/Kope.svg"/>
      </Box>
      <IconButton
        icon={settingsOutline}
        className="ion-padding"
      />
    </Header>
  );
};