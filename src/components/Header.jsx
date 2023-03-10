import React, { useState } from "react";
import img from "../assets/image/png/img.png";
import twe from "../assets/image/png/twe.png";
import vector from "../assets/image/png/vector.png";
import header_img from "../assets/image/png/header_img.png";
import sh from "../assets/image/png/sh_img.png";

function Header() {
  const [name, setName] = useState(false);
  if (name) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className=" d-flex flex-column position-relative overflow-hidden bg_header min_vh_100">
        <img className="position-sh1 d-md-flex d-none" src={sh} alt="sh" />
        <nav className="bg_nav pt-md-4 pt-2">
          <div className="container ">
            <div className="d-flex pb-0 align-items-center position-relative z_index justify-content-between">
              <a className="fs_58 fw_700 ff_sans text-white mb-0 c_p" href="#">
                THE LOGO
              </a>
              <div
                onClick={() => setName(true)}
                className="navdot d-md-none pt-2"
              >
                <div className="navmanu"></div>
                <div className="navmanu my-2"></div>
                <div className="navmanu"></div>
              </div>
              <ul
                data-aos-duration="1000"
                data-aos="fade-down-left"
                className="d-md-flex d-none align-items-center ps-0 mb-0"
              >
                <li className="">
                  <a
                    className="text-decoration-none ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h   line"
                    href="#Toke"
                  >
                    Tokemonics
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line"
                    href="#popular"
                  >
                    Rarity
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line "
                    href="#travelaes"
                  >
                    Team
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line "
                    href="#FAQ"
                  >
                    FAQs
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_ubn mybox1 fs_32 fw_400 before color_light_gray  "
                    href="#memories"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${name ? "show" : "hide"}`}>
              <a
                onClick={() => setName(false)}
                className="d-md-none text-decoration-none d-flex justify-content-end me-3 "
                href="#"
              >
                <img className="position-absolute1" src={img} alt="img" />
              </a>

              <ul className="d-md-none d-flex flex-column justify-content-center min-vh-100 align-items-center ps-0 mb-0 gap-4">
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_ubn fs_32 fw_400 color_light_gray  position-relative line d-inline "
                    href="#"
                  >
                    Tokemonics
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_ubn fs_32 fw_400 color_light_gray  position-relative line d-inline "
                    href="#"
                  >
                    Rarity
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_ubn fs_32 fw_400 color_light_gray  position-relative line d-inline"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_ubn fs_32 fw_400 color_light_gray  position-relative line d-inline "
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none mybox1 ff_ubn fs_32 fw_400 color_light_gray  position-relative line d-inline "
                    href="#"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-bootom mt-2"></div>
          </div>{" "}
          <div className="border_1 mt-md-4 mt-2"></div>
        </nav>
        <div className="py-5 d-flex flex-column flex-grow-1 justify-content-center ">
          <div className="container">
            {" "}
            <div className="row">
              <div
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                className="col-md-7 text-center text-md-start"
              >
                <h2 className="fs_81 fw_900 ff_pro color_liner mb-0">
                  LOREM IPSUM
                </h2>
                <p className="fs_53 fw_600 ff_pro text-white pt-2 mb-0">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="fs_32 fw_300 ff_pro color_light_gray pt-3 mb-0">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-5">
                  <button className="d-flex align-items-center but">
                    <img src={twe} alt="twe" />
                    <p className="fs_32 ps-2 fw_500 ff_code text-white mb-0">
                      Twitter
                    </p>
                  </button>
                  <button className="d-flex ms-sm-5 ms-3 align-items-center but1">
                    <img src={vector} alt="vector" />
                    <p className="fs_32 ps-3 fw_500 ff_code text-white mb-0">
                      Discord
                    </p>
                  </button>
                </div>
              </div>
              <div
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                className="col-md-5 mt-5 mt-md-0"
              >
                <div className="position-relative">
                  {" "}
                  <img className="w-100" src={header_img} alt="header_img" />
                  <img
                    className="position-sh d-md-flex d-none"
                    src={sh}
                    alt="sh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
