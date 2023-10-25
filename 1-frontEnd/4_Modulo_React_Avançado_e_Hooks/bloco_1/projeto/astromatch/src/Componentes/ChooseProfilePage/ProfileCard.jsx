import React from "react";
import { ProfileCardContainer, ProfileInfo, ProfilePicture } from "./StyleChooseProfileCard";

const ProfileCard = (props) => {

  const profile = props.profile

  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.photo}/>
      <ProfileInfo>
      <p>{profile.name}, {profile.age} </p>
      <p> {profile.bio} </p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
