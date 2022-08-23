import React from "react";

import {
  Input,
  InputGroup,
  Modal,
  Toggle,
  Button,
  ButtonToolbar,
  Dropdown,
  DatePicker,
} from "rsuite";
import "./index.css";
export const ModalDashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [overflow, setOverflow] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styles = {
    width: 200,
    marginBottom: 10,
  };
  const stylesModal = {
    width: 200,
    marginBottom: 10,
  };
  return (
    <>
      <hr />
      <ButtonToolbar>
        <Button onClick={handleOpen}>+</Button>
      </ButtonToolbar>

      <Modal
        className="modalContainer"
        overflow={overflow}
        open={open}
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Agregar Gasto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Monto
          <InputGroup style={styles}>
            <InputGroup.Addon>COP$</InputGroup.Addon>
            <Input />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
          <Dropdown title="Categoria">
            <Dropdown.Item>Entretenimiento</Dropdown.Item>
            <Dropdown.Item>Comida</Dropdown.Item>
            <Dropdown.Item>Servicios</Dropdown.Item>
          </Dropdown>
          <DatePicker format="yyyy-MM" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
