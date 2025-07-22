import React from "react";

export default function Footer() {
  return (
    <div className="appFooter  ">
        <div className="footer">
      <div className="card-group m-4">
        <div className="card">
          <div className="card-body m-4 ">
            <h3>Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body m-4">
            <h3>Around the web</h3>
            <div className="icons">
              <div>
               <a href=""><i className="fa-brands fa-facebook mx-1 icon" /></a>
               <a href=""> <i className="fa-brands fa-twitter mx-1 icon" /></a>
               <a href=""> <i className="fa-brands fa-linkedin-in mx-1 icon" /></a>
               <a href=""> <i className="fa-solid fa-globe mx-1 icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body m-4">
            <h3>About freelancer</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="cpyRtP" ><p>Copyright © Your Website 2025</p></div>
    </div>
  
  );
}
