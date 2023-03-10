import React from "react";
import twetter from "../assets/image/png/twetter.png";
import dis from "../assets/image/png/dis.png";

function Footer() {
  return (
    <>
      <section className="py-3 bg_footer">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-between">
            <ul className="ps-0 d-flex mb-0 align-items-center justify-content-center gap-md-4 gap-1">
              <li>
                <a
                  className="ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line"
                  href="#"
                >
                  Tokemonics
                </a>
              </li>
              <li>
                <a
                  className="ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line"
                  href="#"
                >
                  Rarity
                </a>
              </li>
              <li>
                <a
                  className="ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="ff_ubn fs_32 fw_400 me-lg-5 me-4 before position-relative color_light_gray text_h  line"
                  href="#"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center mt-4 mt-md-0 justify-content-center gap-5">
              <a href="#">
                <img className="w_hight trasfrom" src={twetter} alt="twetter" />
              </a>
              <a href="#">
                {" "}
                <img className="w_hight1 trasfrom" src={dis} alt="dis" />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
