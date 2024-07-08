import React from "react";
import Data from "@data/Data";
import Datafilter from "@service/Service";
const personalInfoContent = Datafilter(Data, "personnalInfo");
const goalContent = Datafilter(Data, "goal");

// import PersonalInfoData from "@data/personalInfoData.json";

// const personalInfoContent = PersonalInfoData;
const PersonalInfo = () => {
  return (
    <div className="row">
      <ul className="about-list list-unstyled open-sans-font ">
        {personalInfoContent.map((val, i) => (
          <li key={i} id="FontSize">
            <div className="col-6 col-sm-12 col-lg-12">
              <span className="title">{val.meta}: </span>
              <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                {val.metaLink ? (
                  <a
                    href={val.metaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {val.metaInfo}
                  </a>
                ) : (
                  val.metaInfo
                )}
              </span>
            </div>
          </li>
        ))}
        <div className="box-stats pb-4">{goalContent}</div>
      </ul>
    </div>
  );
};

export default PersonalInfo;
