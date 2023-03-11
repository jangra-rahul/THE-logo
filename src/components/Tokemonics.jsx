import React from "react";
import Mask from "../assets/image/png/Mask.png";

function Tokemonics() {
  return (
    <>
      <section id="Toke" className="bg_header py-md-5 py-3 ">
        <div className="container">
          <h2 className="fs_90 fw_700 ff_space color_1 text-center pb-4">
            Tokemonics
          </h2>

          <div className="row mb-4 justify-content-center">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              className="border border-2 col-11  rounded-3"
            >
              <div className="col-md-10 col-12  row py-3">
                <div className="d-flex justify-content-center align-items-center col-3">
                  <img className=" w_25" src={Mask} alt="Mask" />
                </div>
                <div className="col-9 text-center">
                  <h2 className="fs_22 fw_400 mb-0 ps-5 ff_sans color_blue">
                    THE NAME TOKEN (TNAT)
                  </h2>
                  <div className="d-flex justify-content-center">
                    <h2 className="fs_22 fw_400 ff_sans color_light_gray">
                      0.332627
                    </h2>
                    <p className="fs_20 fw_400 mb-0 ff_sans color_green ps-3">
                      (+17.4%)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 py-2 text-center border border-2">
                  <p className="fs_22 fw_400 ff_sans color_light_gray mb-0">
                    RANK
                  </p>
                  <p className="fs_22 fw_400 ff_sans color_light_gray mb-0">
                    3
                  </p>
                </div>
                <div className="col-6 py-2 text-center border border-2">
                  <p className="fs_22 fw_400 ff_sans color_light_gray mb-0">
                    MARKET CAP
                  </p>
                  <p className="fs_22 fw_400 ff_sans color_light_gray mb-0">
                    $?USD
                  </p>
                </div>
                <div className="col-3 py-2 text-center border border-2">
                  <p className="fs_22 fw_400 ff_sans color_light_gray mb-0">
                    VOLUME
                  </p>
                  <p className="fs_22 fw_400 ff_sans color_light_gray mb-0">
                    $12.65K USD
                  </p>
                </div>
              </div>
              <div className="col-12 text-center py-1">
                <i className="fs_22 fw_400 mb-0 ff_sans color_blue ">
                  Powered by CoinMarketCap
                </i>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              className="col-md-4 col-sm-6 p-lg-5 p-2"
            >
              <div className="mybox">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fs_40 fw_900 ff_pro">
                    NFT<br></br> Holders{" "}
                  </h2>
                  <h3 className="fs_46 fw_900 ff_pro">70%</h3>
                </div>
                <p className="fs_22 fw_600 ff_pro color_light_gray">
                  NFT Holders will earn $TNAT via p2e mechanism.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              className="col-md-4 col-sm-6 p-lg-5 p-2"
            >
              <div className="mybox">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fs_40 fw_900 ff_pro">Liquidity </h2>
                  <h3 className="fs_46 fw_900 ff_pro">20%</h3>
                </div>
                <p className="fs_22 fw_600 ff_pro color_light_gray">
                  20% of $TNAT token supply will be used for liquidity in
                  exchanges.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              className="col-md-4 col-sm-6 p-lg-5 p-2"
            >
              <div className="mybox">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fs_40 fw_900 ff_pro">Team</h2>
                  <h3 className="fs_46 fw_900 ff_pro">10%</h3>
                </div>
                <p className="fs_22 fw_600 ff_pro color_light_gray">
                  10% of $TNAT token supply is for TNAT team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tokemonics;
