import React from "react";
import { NavLink , Link } from "react-router-dom";

export default function NavBar() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary text-uppercase  ">
  <div className="container">
    <Link className="navbar-brand text-white fw-bolder fs-2" to="/">framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item m-1">
          <NavLink className="nav-link text-white fw-bolder " aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item m-1 ">
          <NavLink className="nav-link text-white fw-bolder" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink className="nav-link text-white fw-bolder" to="contact">Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
  );
}
