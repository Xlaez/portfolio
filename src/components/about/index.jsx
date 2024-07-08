import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import SEO from "@common/SEO";
import Data from "@data/Data";
import Datafilter from "@service/Service";
const content = Datafilter(Data, "", "Cv");
const goalContent = Datafilter(Data, "goal");
const contentImg = Datafilter(Data, "", "informationAdditional");
const index = () => {
  return (
    <section className="main-content ">
      <SEO titlePage="About" />
      <div className="container about-container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row">
              {/* <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                  personal info
                </h3>
              </div> */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src={contentImg.mobileImage}
                  className="img-fluid main-img-mobile"
                  alt="kiama"
                />
              </div>

              <div className="col-12 mb-2">{/* <PersonalInfo /> */}</div>

              <div className="col-12 mt-1 mb-5 text-center">
                <a className="button" href={content} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-lg-7 col-12 mt-5 mt-lg-0 mb-3">
          <Achievements />
        </div>
        <div className="col-12 mb-2">
          {/* <PersonalInfo /> */}
          <div className="box-stats pb-4 text-center">{goalContent}</div>
        </div>
        <hr className="separator" />

        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div>

        <hr className="separator mt-1" />

        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
