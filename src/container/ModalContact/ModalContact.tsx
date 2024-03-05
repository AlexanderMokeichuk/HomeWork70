import React, {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectorModalContactSlice, selectorModalLauding} from "../../store/contactSlice";
import {deleteContactInApi, fetchContact, fetchContacts} from "../../store/contactSliceThunks";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import Spinner from "../../components/Spinner/Spinner";
import phoneImage from "../../assets/phone.svg";
import messageImage from "../../assets/message.svg";


const linkStyle = {
  width: 20,
  height: 20,
  display: "block",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const ModalContact: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const lauding = useAppSelector(selectorModalLauding);
  const modal = useAppSelector(selectorModalContactSlice);

  useEffect(() => {
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

  let modalBody = <div></div>;
  if(modal) {
    modalBody = (
      <>
        <div>
          <img src={modal.photo} className={"rounded"} style={{width: 100, height: 100}}/>
        </div>
        <div>
          <h3>{modal.name}</h3>
          <div className={"d-flex flex-column "}>
            <div className={"d-flex align-items-center gap-2"}>
              <span style={{backgroundImage: `url(${phoneImage})`, ...linkStyle}}/>
              <a href={"#"}>{modal.phoneNumber}</a>
            </div>
            <div className={"d-flex align-items-center gap-2"}>
              <span style={{backgroundImage: `url(${messageImage})`, ...linkStyle}}/>
              <a href={"#"}>{modal.email}</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    (lauding)
      ? <Spinner/>
    : <ModalWindow>
        <div className="modal-header">
          <Link to={"/"} className="btn-close"/>
        </div>
        <div className="modal-body d-flex gap-3">
          {modalBody}
        </div>
        <div className="modal-footer">
          <Link
            to={`/contact-edit/${id}`}
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Edit
          </Link>
          <button type="button" onClick={deleteContact} className="btn btn-primary">
            Delete
          </button>
        </div>
      </ModalWindow>
  );
};

export default ModalContact;