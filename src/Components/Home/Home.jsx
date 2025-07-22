import React from "react";
import picture from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <div className=" vh-100">
      <div className="home d-flex justify-content-center align-items-center text-white vh-100">
        <div className="text-center">
          <img src={picture} alt="avatar" className="mb-3 w-100" />
        </div>
        <div>
          <app-star>
            <div className="text-center pt-4" style={{ color: "white" }}>
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
               John
              </h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3" />
                <i className="fa-solid fa-star" />
                <div className="line ms-3" />
              </div>
              <div _ngcontent-gcn-c17="">
                Graphic Artist - Web Designer - Illustrator
              </div>
            </div>
          </app-star>
        </div>
      </div>
    </div>
  );
}
