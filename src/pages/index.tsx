import React from 'react';
import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/react';
import {settingsOutline} from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';


const Index: React.FC = () => {
  return (
    <IonPage>
      <IonHeader
        className="ion-no-border relative"
      >
        <div className='f fh h-full ion-padding'>
          <img src="/assets/Kope.svg" className="w44 block"/>
        </div>
        <IonIcon
          icon={settingsOutline}
          className="absolute t0 r0 fs24 ion-padding"
        />
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Index;
