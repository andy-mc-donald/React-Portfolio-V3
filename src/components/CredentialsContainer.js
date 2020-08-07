import React from "react";
import styled from "styled-components";
import CardCredentialsL from "./CardCredentialsL";
import FoundersAndCoders from "../assets/credentials/FoundersAndCoders.png";
import CodeWars from "../assets/credentials/CodeWars.png";

const CredentialsContainer = () => {
    return(
        <div>
            <CardCredentialsL img={FoundersAndCoders} color="yellow" text="Founders and Coders bootcamp graduate"/>
            <CardCredentialsL img={FoundersAndCoders} color="yellow" text="Founders and Coders bootcamp graduate"/>
            <CardCredentialsL img={CodeWars} color="lightgrey" text="Founders and Coders bootcamp graduate"/>
        </div>
    )
}

export default CredentialsContainer;