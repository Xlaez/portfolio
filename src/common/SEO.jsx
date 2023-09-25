import React from "react";
import Data from "@data/Data";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Datafilter from "@service/Service";

const content = Datafilter(Data, "", "informationAdditional");

const SEO = ({ titlePage }) => {
  const designation = content.designation[0];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {content.titleName} | {titlePage} - {designation} & Utibe
          </title>
          <meta
            name="description"
            content="Utibeabasi is a software engineer with passion for building software development tools and technologies. He is the creator of the dolphjs framework and lead backend developer at ReadersPlug."
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
    </>
  );
};
export default SEO;
