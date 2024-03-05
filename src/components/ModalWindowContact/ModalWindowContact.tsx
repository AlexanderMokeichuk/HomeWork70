import React, {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectorModalContactSlice, selectorModalLauding} from "../../store/contactSlice";
import {deleteContactInApi, fetchContact, fetchContacts} from "../../store/contactSliceThunks";
import Spinner from "../Spinner/Spinner";

const ModalWindowContact: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const lauding = useAppSelector(selectorModalLauding);
  const modal  = useAppSelector(selectorModalContactSlice);

  useEffect( () => {
    if (id) {
      dispatch(fetchContact(id));
    }
  }, [dispatch, id]);

  const deleteContact = async () => {
    if (id) {
      await dispatch(deleteContactInApi(id));
      await dispatch(fetchContacts());
      navigate(-1);
    }
  };

  return (
    <>
      {
        (lauding)
        ? <Spinner />
        : <>
            <div className={"position-fixed z-1 top-0 start-0 opacity-50 w-100 h-100 bg-dark"}/>
            <div className="modal d-block">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <Link to={"/"} className="btn-close"/>
                  </div>
                  <div className="modal-body">
                    {
                      (modal)
                        ? <>
                          <img src={modal.photo} style={{width: 100, height: 100}}/>
                          {modal.name}
                        </>
                        : ""
                    }
                  </div>
                  <div className="modal-footer">
                    <Link to={`/contact-edit/${id}`} type="button" className="btn btn-secondary"
                          data-bs-dismiss="modal">Edit</Link>
                    <button type="button" onClick={deleteContact} className="btn btn-primary">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    </>
  );
};

export default ModalWindowContact;