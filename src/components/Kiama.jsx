import React, { useState } from "react";
import Modal from "react-modal";
import SEO from "@common/SEO";

import Typed from "react-typed";
import cancelImg from "@assets/images/cancel.svg";
import Index from "@components/about/index";
import Data from "@data/Data";
import Datafilter from "@service/Service";

import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const Kiama = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const content = Datafilter(Data, "", "informationAdditional");

  return (
    <>
      <div className="row home-details-container align-items-center">
        {/* SEO */}
        <SEO titlePage="Home" />

        <LazyLoadComponent>
          <div
            className="col-lg-4 bg position-fixed d-none d-lg-block"
            style={{
              backgroundImage: `url(${content.kiamaImage})`,
            }}
          ></div>
        </LazyLoadComponent>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <LazyLoadImage
              src={content.mobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="kiama"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {content.titleName}.<br />
              <span>
                <Typed
                  strings={content.designation}
                  typeSpeed={80}
                  backSpeed={5}
                  backDelay={1000}
                  loop
                />
              </span>
            </h1>
            <p
              className="open-sans-font"
              dangerouslySetInnerHTML={
                content.descriptions && {
                  __html: content.descriptions,
                }
              }
            ></p>
            {/* <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{content.kiamaBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button> */}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark kiama"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              <Index />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Kiama;
