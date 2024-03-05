import React from "react";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {resetContactForm} from "../../store/contactFormSlice";

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className="nav nav-pills nav-fill">

      <li className="nav-item">
        <NavLink to={"/"} onClick={() => dispatch(resetContactForm())} className={"nav-link"}>Contacts</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/contact-form"} onClick={() => dispatch(resetContactForm())} className={"nav-link"}>Add contact</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;