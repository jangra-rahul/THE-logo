import React from "react";
import logo from "../assets/image/png/header_img.png";
const Loading = () => {
  return (
    <div className="min-vh-100 section_rbg loding_position">
      {/* <img
        className="w_xsm_50 w_sm_13 animation_loding"
        src={logo}
        alt="loading"
      /> */}
      <h1 className="fs_90 fw_700 ff_space color_1 animation_loding">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
