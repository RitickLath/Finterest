/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Links = (props) => {
  return (
    <div>
      <h1 className="text-[#565e6e] mb-2">
        <Link to={props.to}>{props.item}</Link>
      </h1>
    </div>
  );
};

export default Links;
