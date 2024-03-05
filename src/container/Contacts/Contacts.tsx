import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectorContactsSlice, selectorLaudingContacts} from "../../store/contactSlice";
import Spinner from "../../components/Spinner/Spinner";
import ContactAlert from "../../components/ContactAlert/ContactAlert";
import {Outlet} from "react-router-dom";
import {fetchContacts} from "../../store/contactSliceThunks";

const Contacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const lauding = useAppSelector(selectorLaudingContacts);
  const contacts = useAppSelector(selectorContactsSlice);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={"mt-3"}>
      {(lauding)
        ? <Spinner />
        : contacts.map((item) => {
          return <ContactAlert key={item.id} contact={item} />;
        })
      }
      <Outlet />
    </div>
  );
};

export default Contacts;