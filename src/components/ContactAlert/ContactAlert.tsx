import React from "react";
import {Contact} from "../../type";
import {Link} from "react-router-dom";

interface Props {
  contact: Contact
}

const ContactAlert: React.FC<Props> = ({contact}) => {
  return (
    <Link to={`modal-contact/${contact.id}`} className={"alert alert-primary d-flex gap-5 align-items-center"}>
      <img src={contact.photo} className={"rounded"} style={{width:100,height:100}}/>
      <h6>{contact.name}</h6>
    </Link>
  );
};

export default ContactAlert;