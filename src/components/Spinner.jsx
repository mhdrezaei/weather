import React from "react";
import imgSpinner from "../assets/image/spinner.gif";

function Spinner() {
  return (
    <img
      src={imgSpinner}
      alt="Loading..."
      className="w-12 h-12"
      style={{ display: "inline-block", margin: "3rem auto" }}
    />
  );
}

export default Spinner;
