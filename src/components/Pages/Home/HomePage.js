import React from "react"
//import Form from "./Form"
import ProfileCard from "./ProfileCard"
//import OrderForm2 from "../../OrderForm2"


const HomePage = () => {
    return(
        <>
        <ProfileCard
        name="Fabiola Martinez"
        description="Tamales &amp; Tortas"
        location="Escondido, near Washington Ave &amp; Broadway"
        optionalBio="Optional short description about yourself, what you do, what you sell, etc"
        />

        </>
    )
}

export default HomePage