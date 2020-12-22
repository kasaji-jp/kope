import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Index from './pages';
import {home, listOutline, bookOutline, personOutline} from 'ionicons/icons'
import styled from 'styled-components'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" component={Index} exact={true} />
          {/* <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="index" href="/">
            <IonIcon icon={home} />
            <IonLabel>ホーム</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list" href="/list">
            <IonIcon icon={listOutline} />
            <IonLabel>リスト</IonLabel>
          </IonTabButton>
          <IonTabButton tab="learning" href="/learning">
            <IonIcon icon={bookOutline} />
            <IonLabel>調べる</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon icon={personOutline} />
            <IonLabel>マイページ</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
