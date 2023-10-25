import React, { useState,  useEffect  } from "react";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";
import axios from "axios";



const ChooseProfilePage = () => {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  // Para pegar os perfil
  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aurelio/person"
      )
      .then((res) => {
        setProfileToChoose(res.data.profile);
      });
  }

  //  Para fazer a renderizacao na tela
  useEffect(() => {
    getProfileToChoose()
  }, []);


  // Para lhas os perfils e escolher 
  const chooseProfile = choise => {
    const body = {
      choice: choise,
      id: profileToChoose.id,
    };

    setProfileToChoose(undefined)
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aurelio/choose-person", body)
      .then(() => {
        getProfileToChoose()
      });
  }
  // para descartar um perfil
  const onClickNo = () => {
    chooseProfile(false)
  };
  
  // para aceitar um perfil
  const onClickYes = () => {
    chooseProfile(true)
  };

  return (
    <div>
      {
        profileToChoose ? 
        (<>
         <ProfileCard profile={profileToChoose} />
         <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>) : <p>CARREGANDO...</p>
      }
    </div>
  );
};

export default ChooseProfilePage;
