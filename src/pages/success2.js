import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";


function Success2() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="text-center">


        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Order Successful
        </h2>


  </section>
    </Layout>
  );
}

export default Success2;

