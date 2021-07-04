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

const ModalReport = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>Generate The Report</ModalTitle>
        <ModalClose onClose={onClose}>
          <X />
        </ModalClose>
      </ModalHeader>
      <ModalBody>
        <p>Do you want to generate the report?</p>
      </ModalBody>
      <ModalFooter>
        <Button>Generate Report</Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalReport;
