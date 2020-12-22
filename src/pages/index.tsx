import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonItem,
  IonLabel,
  IonTextarea,
  IonDatetime,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { Header } from '../components/molecules';
import styled from 'styled-components'



const Body = styled.div`
  background-color: white;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 100%
`

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

const TextAreaBox = styled(IonTextarea)`
  font-size: 14px;
`

const InputBox = styled(IonItem)`
  margin-bottom: 16px;
  background-color: white;
`

const SubTitle = styled.div`
  font-size: 14px;
  color: var(--ion-color-medium);
`

const Index: React.FC = () => {
  const emotions = [
    {id: 'anger', icon: '😡', label: '怒り'},
    {id: 'impatience', icon: '😵', label: '焦り'},
    {id: 'anxiety', icon: '😰', label: '不安'},
    {id: 'sorrow', icon: '😭', label: '悲しみ'},
    {id: 'fear', icon: '😱', label: '恐怖'},
    {id: 'powerlessness', icon: '😞', label: '無力感'},
    {id: 'fatigue', icon: '😪', label: '疲労感'},
    {id: 'regret', icon: '😩', label: '後悔'},
  ]


  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Body className="ion-padding">
          <Label>日付</Label>
          <InputBox>
            <IonDatetime displayFormat="YYYY/MM/DD" color="white" />
          </InputBox>
          <Label>状況</Label>
          <InputBox>
            <TextAreaBox placeholder="その時の状況、気持ちを書いてみよう" rows={4}></TextAreaBox>
          </InputBox>
          <Label>感情</Label>
          <SubTitle>タップして感情を0~100のレベルで表現してみよう</SubTitle>
          <IonGrid>
            <IonRow>
              {
                emotions.map((emotion, index) => {
                  return (
                    <IonCol size='3' key={index}>
                      <div style={{fontSize: '24px'}} className="ion-text-center">{emotion.icon}</div>
                      <IonRow className="ion-justify-content-center ion-align-items-end">
                        <div style={{marginRight: "4px", fontSize: "12px"}}>{emotion.label}</div>
                        <div style={{fontSize: "20px"}}>0</div>
                      </IonRow>
                    </IonCol>
                  )
                })
              }
            </IonRow>
          </IonGrid>
        </Body>
      </IonContent>
    </IonPage>
  );
};

export default Index;
