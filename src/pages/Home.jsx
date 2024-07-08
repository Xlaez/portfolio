import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SwitchDark from "@common/SwitchDark";
import Kiama from "@components/Kiama";
import Index from "../components/about/index";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/contact/Address";
import Social from "../components/contact/Social";
import Contact from "../components/contact/Contact";

const menuItem = [
  { id: "0", icon: "fa-home", menuName: "Home" },
  { id: "1", icon: "fa-user", menuName: "About" },
  { id: "2", icon: "fa-briefcase", menuName: "Portfolio" },
  { id: "3", icon: "fa-envelope-open", menuName: "Contact" },
];

const Home = () => {
  return (
    <div>
      {/* Switcher */}
      <SwitchDark />

      <Tabs
        defaultFocus={true}
        onSelect={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        {/* menu */}
        <div className="header">
          <TabList className="icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="tab-panel_list">
          {/* home content */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Kiama />
            </div>
          </TabPanel>

          {/* about content */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              <Index />
            </div>
          </TabPanel>

          {/* portfolio content */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            <Portfolio />
          </TabPanel>

          {/* Contact */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't hesitate !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address />

                  <Social />
                </div>

                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
