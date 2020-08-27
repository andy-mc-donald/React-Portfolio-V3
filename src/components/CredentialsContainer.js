import React from "react";
import CardCredentialsL from "./CardCredentialsL";
import CardCredentialsR from "./CardCredentialsR";
import FoundersAndCoders from "../assets/credentials/FoundersAndCoders.png";
import FreeCodeCampCertificate from "../assets/credentials/FreeCodeCampCertificate.png";
import CodeWars from "../assets/credentials/CodeWars.png";

const CredentialsContainer = () => {
  return (
    <div>
      <CardCredentialsL
        img={FoundersAndCoders}
        bgPos="center"
        color="#ffe500"
        text="Founders and Coders bootcamp graduate"
        link="https://www.foundersandcoders.com"
      />
      <CardCredentialsR
        img={FreeCodeCampCertificate}
        bgPos="center"
        color="#d0d0d5"
        text="FreeCodeCamp certified"
        link="https://www.freecodecamp.org/andy-mc-donald"
      />
      <CardCredentialsL
        img={CodeWars}
        bgPos="30%"
        color="#363749"
        textColor="white"
        text="Codewars '4 kyu' JavaScript"
        link="https://www.codewars.com/users/andy-mc-donald"
      />
    </div>
  );
};

export default CredentialsContainer;
