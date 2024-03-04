import React from "react";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <ul className="nav nav-pills nav-fill">

      <li className="nav-item">
        <NavLink to={"/"} className={"nav-link"}>Contacts</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/contact-form"} className={"nav-link"}>Add contact</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;