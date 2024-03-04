import React from "react";
import {Link} from "react-router-dom";
import {changeContactValue, selectorContact, selectorLauding} from "../../store/contactFormSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectorContact);
  const lauding = useAppSelector(selectorLauding);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeContactValue({
      ...contact,
      [e.target.name]: e.target.value,
    }));
  };

  const formContact = (
    <form className={"form-control d-flex flex-column gap-2 "}>
      <div>
        <label htmlFor={"name"}>Name</label>
        <input
          type={"text"}
          name={"name"}
          value={contact.name}
          onChange={onChange}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label htmlFor={"phone"}>Phone</label>
        <input
          type={"number"}
          name={"phoneNumber"}
          value={contact.phoneNumber}
          onChange={onChange}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label htmlFor={"emil"}>Email</label>
        <input
          type={"email"}
          name={"email"}
          value={contact.email}
          onChange={onChange}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label htmlFor={"photo"}>Photo</label>
        <input
          type={"url"}
          name={"photo"}
          value={contact.photo}
          onChange={onChange}
          className={"form-control"}
          required
        />
      </div>
      <div className={"d-flex gap-3 mt-3 mb-3"}>
        <label>Photo preview</label>
        <img
          alt={"Not found"}
          src={contact.photo}
          className={"border rounded"}
          style={{width: 100, height: 100}}
        />
      </div>
      <div className={"d-flex gap-3"}>
        <button type={"submit"} className={"btn btn-primary"}>Save</button>
        <Link to={"/"} className={"btn btn-primary"}>Back to contacts</Link>
      </div>
    </form>
  );

  return (
    (lauding)
    ? <Spinner />
    : formContact
  );
};

export default ContactForm;