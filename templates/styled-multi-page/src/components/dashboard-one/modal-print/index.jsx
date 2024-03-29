import { X } from "react-feather";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  Button,
} from "../..";

const ModalPrint = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>Print The Report</ModalTitle>
        <ModalClose onClose={onClose}>
          <X />
        </ModalClose>
      </ModalHeader>
      <ModalBody>
        <p>Do you want to print the report?</p>
      </ModalBody>
      <ModalFooter>
        <Button>Print</Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalPrint;
