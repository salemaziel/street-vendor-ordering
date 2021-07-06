import React from "react";
//import OrderForm2 from "../components/Pages/Home/OrderForm2"
import SuccessPage from "../components/Pages/Success/SuccessPage";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Success(){

  return (
    <>
        <Layout>
      <SEO
        keywords={[`tamales`, `tortas`, `successful order`, `Latino`]}
        title="Order Successfull"
      />
    <SuccessPage 
            name="Fabiola Martinez"
            description="Tamales &amp; Tortas"
            location="Escondido, near Washington Ave &amp; Broadway"
            optionalBio=""
            />

      </Layout>

    </>
  );
}


export default Success;