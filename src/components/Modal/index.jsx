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
import { addDoc, collection, Timestamp } from "firebase/firestore"
import {db}  from "../../firebaseConfig/init"

export const ModalDashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [overflow, setOverflow] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [monto, setMonto] = React.useState("")
  const styles = {
    width: 200,
    marginBottom: 10,
  }; 

  const handleSendGasto = async () => {
    await addDoc(collection(db, "Gastos"), {
      Monto: monto || null,
      Category: "compras",
      Fecha: Timestamp.fromDate(new Date()),
    });
    alert("enviado")
  }
  const handleChangeMonto = (e) => {
    setMonto(e.target.value);
    console.log(monto)
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
            <InputGroup.Addon onChange={handleChangeMonto} defaultValue={monto}>.00</InputGroup.Addon>
          </InputGroup>
          <Dropdown title="Categoria">
            <Dropdown.Item>Entretenimiento</Dropdown.Item>
            <Dropdown.Item>Comida</Dropdown.Item>
            <Dropdown.Item>Servicios</Dropdown.Item>
          </Dropdown>
          <DatePicker format="yyyy-MM" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSendGasto} color="violet" appearance="subtle">
            Ok
          </Button>
          <Button onClick={handleClose} color="red" appearance="primary">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
