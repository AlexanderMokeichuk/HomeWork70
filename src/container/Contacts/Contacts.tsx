import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectorContactsSlice} from "../../store/contactsSlice";
import {fetchContacts} from "../../store/contactsSliceThunks";
import Spinner from "../../components/Spinner/Spinner";

const Contacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const {contacts, lauding} = useAppSelector(selectorContactsSlice);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={"mt-3"}>
      {(lauding)
        ? <Spinner />
        : contacts.map((item) => {
          return (
            <div className={"alert alert-primary"}>
              <span>{item.name}</span>
            </div>
          );
        })
      }
    </div>
  );
};

export default Contacts;