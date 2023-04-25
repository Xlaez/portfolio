import React from "react";
import Data from "@data/Data";
import Datafilter from "@service/Service";
const content = Datafilter(Data, "personnalInfo").filter(
  (item) =>
    item.meta === "Address" || item.meta === "Email" || item.meta === "phone"
);
const Address = () => {
  return (
    <>
      {content.map((val, i) => (
        <p
          className="open-sans-font custom-span-contact position-relative"
          key={i}
        >
          <i className={val.metaDataClass}></i>
          <span className="d-block">{val.metaContext}</span>{" "}
          <a href={val.metaLink}>{val.metaInfo}</a>
        </p>
      ))}
    </>
  );
};

export default Address;
