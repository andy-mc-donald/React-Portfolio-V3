import React from "react";
import CardCredentialsL from "./CardCredentialsL";
import CardCredentialsR from "./CardCredentialsR";
import FoundersAndCoders from "../assets/credentials/FoundersAndCoders.png";
import FreeCodeCampCertificate from "../assets/credentials/FreeCodeCampCertificate.png"
import CodeWars from "../assets/credentials/CodeWars.png";


const CredentialsContainer = () => {
    return(
        <div>
            <CardCredentialsL img={FoundersAndCoders} bgPos="center" color="#ffe500" text="Founders and Coders bootcamp graduate"/>
            <CardCredentialsR img={FreeCodeCampCertificate} bgPos="center" color="#d0d0d5" text="Founders and Coders bootcamp graduate"/>
            <CardCredentialsL img={CodeWars} bgPos="30%" color="#3c7ebb" text="Codewars '4 kyu' JavaScript"/>
        </div>
    )
}

export default CredentialsContainer;