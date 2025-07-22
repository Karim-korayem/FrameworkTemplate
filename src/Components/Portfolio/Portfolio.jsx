import React from "react";
import pic1 from "../../assets/port1.png";
import pic2 from "../../assets/port2.png";
import pic3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <app-portfolio >
      <div className="mb-4">
        <div className="pt-1">
          <app-star title="portfolio component" customcolor="#2c3e50">
            <div
              className="text-center pt-4"
              style={{ color: "rgb(44, 62, 80)" }}
            >
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                portfolio component
              </h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div
                  className="line me-3"
                  style={{ backgroundColor: "rgb(44, 62, 80)" }}
                />
                <i className="fa-solid fa-star" />
                <div
                  className="line ms-3"
                  style={{ backgroundColor: "rgb(44, 62, 80)" }}
                />
              </div>
            </div>
          </app-star>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100 rounded-3" src={pic1} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x " />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100 rounded-3" src={pic2} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x " />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img  className="w-100 rounded-3" src={pic3} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x " />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img  className="w-100 rounded-3" src={pic1} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x " />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img  className="w-100 rounded-3" src={pic2} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x " />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100 rounded-3" src={pic3} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x " />
                  </div>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
       
      </div>
    </app-portfolio>
  );
}
