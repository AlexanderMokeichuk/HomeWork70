import React, {FormEvent, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import {addContactToApi, editContact, fetchDataForForm} from "../../store/contactFormThunks";
import {selectorContact, selectorLauding} from "../../store/contactFormSlice";
import ContactForm from "../../components/ContactForm/ContactForm";

const AddContact: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectorContact);
  const lauding = useAppSelector(selectorLauding);

  useEffect(() => {
    if (id) {
      dispatch(fetchDataForForm(id));
    }
  }, [dispatch, id]);


  const eventContact = async (e: FormEvent) => {
    e.preventDefault();
    if(!id) {
      await dispatch(addContactToApi(contact));
    } else {
      await dispatch(editContact({...contact, id}));
      navigate(-1);
    }
  };

  return (
    (lauding)
      ? <Spinner/>
      : <ContactForm eventContact={eventContact} id={id}/>
  );
};

export default AddContact;