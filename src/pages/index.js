import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


import ProfileCard from "../components/Pages/Home/ProfileCard";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`street vendor`, `order online`, `sell online`, `Raza`, `Latino`, `Support Local Business`]}
        title="Fabiola's Tamales &amp; Tortas"
      />
      <ProfileCard
        name="Fabiola Martinez"
        description="Tamales &amp; Tortas"
        location="Escondido, near Washington Ave &amp; Broadway"
        optionalBio="Optional short description about yourself, what you do, what you sell, etc"
      />{" "}

    </Layout>
  );
}

export default IndexPage;
