import Modal from "react-modal";
import EditForm from "../EditForm/EditForm";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("#root");

const ModalEditContact = ({ modalState, closeModal, id }) => {
  console.log(modalState);
  return (
    <Modal
      isOpen={modalState}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>
        <IoCloseOutline />
      </button>

      <EditForm id={id} closeModal={closeModal} />
    </Modal>
  );
};

export default ModalEditContact;
