import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SEO from "@common/SEO";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cancelImg from "@assets/images/cancel.svg";

import Data from "@data/Data";
import Datafilter from "@service/Service";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  const allCategory = Datafilter(Data, "", "sp");

  const PortfolioData = Datafilter(Data, "", "PortfolioData");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="portfolio-main">
        <SEO titlePage="Portfolio" />
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            {allCategory.map((category) => (
              <Tab key={category}>{category.toUpperCase()}</Tab>
            ))}
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, title, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <LazyLoadImage src={image} alt={title} />
                        <h3>
                          <span className="conent-title">{title}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {allCategory.map((category, i) => {
              return (
                <TabPanel key={i}>
                  <div className="tab-container">
                    {PortfolioData.filter(
                      (item) => item.category === category
                    ).map((item) => {
                      const { id, title, image, delayAnimation } = item;

                      return (
                        <div
                          key={id}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(id)}
                          >
                            <LazyLoadImage src={image} alt={title} />
                            <h3>
                              <span className="conent-title">{title}</span>
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
              );
            })}
          </div>
        </Tabs>
      </div>

      <Modal
        isOpen={getModal}
        onRequestClose={() => setGetModal(false)}
        data-custom-prop={modalId}
        contentLabel="Portfolio Modal"
        className="custom-modal-portfolio dark kiama"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
        appElement={document.getElementById("root") || undefined}
      >
        <div>
          <button className="close-modal" onClick={() => setGetModal(false)}>
            <img src={cancelImg} alt="close icon" />
          </button>
          <div className="box_inner about">
            {PortfolioData.filter((item) => item.id === modalId).map((item) => {
              const { id, title, image, description, delayAnimation } = item;

              return (
                <div key={item.id} data-aos="fade">
                  <div>
                    <h2 className="heading mb-2">{item.title}</h2>
                    <div className="modal__details">
                      {item.modalDetails.map((details, i) => {
                        return (
                          <div key={i} className="row open-sans-font">
                            <div className="col-12 col-sm-6 mb-2">
                              <i className="fa fa-file-text-o pr-2"></i>
                              Project:{" "}
                              <span className="ft-wt-600 uppercase">
                                {item.category.toUpperCase()}
                              </span>
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                              <i className="fa fa-user-o pr-2"></i>
                              Client :{" "}
                              <span className="ft-wt-600 uppercase">
                                {details.client}
                              </span>
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                              <i className="fa fa-code pr-2"></i>
                              Technology :{" "}
                              <span className="ft-wt-600 uppercase">
                                {details.technolgy}
                              </span>
                            </div>
                            {details.preview ? (
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-external-link pr-2"></i>
                                Preview:{" "}
                                <a
                                  className="preview-link"
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  href={details.link}
                                >
                                  {details.preview}
                                </a>
                              </div>
                            ) : null}
                            {details.date ? (
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-calendar pr-2"></i>
                                Date :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.date}
                                </span>
                              </div>
                            ) : null}
                            <div className="col-12 col-sm-6 mb-2">
                              <i className="fa fa-tag pr-2"></i>
                              Tag :{" "}
                              <span className="ft-wt-600 uppercase">
                                {details.tag.join(", ")}
                              </span>
                            </div>
                            <div className="col-12 col-sm-12 mb-2 mt-3">
                              <span
                                className="ft-wt-600 uppercase"
                                dangerouslySetInnerHTML={{
                                  __html: details.body,
                                }}
                              ></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <figure className="modal__img">
                      <Slider {...settings}>
                        <div>
                          <LazyLoadImage src={item.image} alt="portfolio" />
                        </div>
                        {item.modalDetails.map((details, i) => {
                          return Object.keys(details.gallery).map((key) => {
                            return (
                              <div key={key}>
                                <LazyLoadImage
                                  src={details.gallery[key]}
                                  alt="portfolio-gallery"
                                />
                              </div>
                            );
                          });
                        })}
                      </Slider>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
