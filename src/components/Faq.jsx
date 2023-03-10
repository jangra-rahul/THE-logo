import React from "react";

function Faq() {
  return (
    <>
      <section id="FAQ" className="py-5 faq_bg">
        <div className="container">
          <h2 className="fs_90 fw_700 ff_space color_1 text-center pb-4 ">
            FAQ
          </h2>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className="d-flex justify-content-center"
          >
            <div className="text-center card_2 ">
              <h2 className="fs_32 fw_700 ff_pro faq_liner">
                What is the total The Name supply?
              </h2>
              <p className="fs_32 fw_600 ff_pro color_light_gray">
                What is the total The Name supply *****.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className="d-flex justify-content-center mt-4"
          >
            <div className="text-center card_2 ">
              <h2 className="fs_32 fw_700 ff_pro faq_liner">
                Where can I buy or sell my The Name?
              </h2>
              <p className="fs_32 fw_600 ff_pro color_light_gray">
                You can mint them on our website or get them on secondary
                market.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className="d-flex justify-content-center mt-4"
          >
            <div className="text-center card_2 ">
              <h2 className="fs_32 fw_700 ff_pro faq_liner">
                Where can I buy TNAT$ token?
              </h2>
              <p className="fs_32 fw_600 ff_pro color_light_gray">
                You can buy across multiple platforms.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className="d-flex justify-content-center mt-4"
          >
            <div className="text-center card_2 ">
              <h2 className="fs_32 fw_700 ff_pro faq_liner">
                Have More Questions?
              </h2>
              <p className="fs_32 fw_600 ff_pro color_light_gray">
                Join our Discord.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
