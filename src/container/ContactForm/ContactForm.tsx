import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import {changeContactValue, selectorBtnLauding, selectorContact, selectorLauding} from "../../store/contactFormSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import {addContactToApi} from "../../store/contactFormThunks";
import BtnSpinner from "../../components/BtnSpinner/BtnSpinner";

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectorContact);
  const lauding = useAppSelector(selectorLauding);
  const btnLauding = useAppSelector(selectorBtnLauding);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeContactValue({
      ...contact,
      [e.target.name]: e.target.value,
    }));
  };

  const addContact = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(addContactToApi(contact));
  };

  const photoPreview = {
    width: 100,
    height: 100,
    backgroundImage: `url(${contact.photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const formContact = (
    <form onSubmit={addContact} className={"form-control d-flex flex-column gap-2 "}>
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
        <div className={"border rounded"} style={photoPreview}></div>
      </div>
      <div className={"d-flex gap-3"}>
        <button className="btn btn-primary d-flex align-items-center gap-2" type="submit"  disabled={btnLauding}>
          {btnLauding && <BtnSpinner />}
          <span role="status">Add</span>
        </button>
        <Link to={"/"} className={"btn btn-primary"}>Back to contacts</Link>
      </div>
    </form>
  );

  return (
    (lauding)
      ? <Spinner/>
      : formContact
  );
};

export default ContactForm;