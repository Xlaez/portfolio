import React from "react";
import Data from "@data/Data";
import Datafilter from "@service/Service";
import CountUp from "react-countup";
const achievementsContent = Datafilter(Data, "archievements");

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-4" key={i}>
          <div className="box-stats">
            <h3 className="poppins-font position-relative">
              <CountUp end={val.title} delay={1} />
            </h3>
            <p
              className="open-sans-font m-0 position-relative text-uppercase"
              id="FontSizep"
            >
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
