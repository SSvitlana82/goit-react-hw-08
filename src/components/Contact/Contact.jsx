import style from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";
import ModalEditContact from "../ModalEditContact/ModalEditContact";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [modalState, setmodalState] = useState(false);
  const options = {
    title: "DELETE CONTACT!",
    message: "Do you want to delete contact?",
    buttons: [
      {
        label: "Yes",
        onClick: () => dispatch(deleteContact(contact.id)),
      },
      {
        label: "No",
        onClick: () => {},
      },
    ],
  };
  const onDelete = () => {
    confirmAlert(options);
  };
  const closeModal = () => {
    setmodalState(false);
  };
  const openModal = () => {
    setmodalState(true);
  };

  return (
    <div className={style.contactBox}>
      <div className={style.container}>
        <p className={style.contactField}>
          <BsFillPersonFill size={20} className={style.icon} />
          {contact.name}
        </p>
        <p className={style.contactField}>
          <BsFillTelephoneFill className={style.icon} />
          {contact.number}
        </p>
      </div>
      <div className={style.conteinerBtn}>
        <button onClick={onDelete} className={style.contactBtn}>
          Delete
        </button>
        <button onClick={openModal} className={style.contactBtn}>
          Edit
        </button>
      </div>
      <ModalEditContact
        modalState={modalState}
        id={contact.id}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Contact;
