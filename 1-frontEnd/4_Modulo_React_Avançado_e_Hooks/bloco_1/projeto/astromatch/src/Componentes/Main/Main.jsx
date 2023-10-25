import React, { useState } from "react";
import AppBAr from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import { MainContainer } from "./StyleMain";

const Main = () => {

  const [selectedPage, setSelectedPage] =  useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage />
      case 'match-list': 
        return <MatchListPage />
      default :
      return <ChooseProfilePage />
    }
  }

  const goToChooseProfilePage = () => {
    setSelectedPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectedPage('match-list')
  }

  return (
    <MainContainer>
      <AppBAr goToChooseProfilePage ={goToChooseProfilePage} goToMatchListPage={goToMatchListPage} />
      {renderSelectedPage()}
    </MainContainer>
  );
}

export default Main;