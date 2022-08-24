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
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig/init";

export const ModalDashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [overflow, setOverflow] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [category, setCategory] = React.useState("");

  const categorySelect = (e) => {
    setCategory(e.target.value);
  };

  const [amount, setAmount] = React.useState("");
  
  console.log(category);
  const handleSendGasto = async () => {
    await addDoc(collection(db, "Gastos"), {
      Monto: amount || null,
      Category: category,
      Fecha: Timestamp.fromDate(new Date()),
    });
    alert("enviado");
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
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
          <div className="content-modal">
          <div className="modal-content-amount">
            <span>Ingresa nuevo egreso COP$  </span>
            <input
            title=""
            type="text"
            className="amount"
            placeholder="Monto"
            onChange={handleChangeAmount}
            eventkey={amount}
          />.00
            </div>
          <div className="modal-content">
          <span>Selecciona Categoria </span>
              <select className="category-container"value={category} onChange={categorySelect}>
                <option>Entretenimiento</option>
                <option>Servicios</option>
                <option>Restaurante</option>
                <option>Compras</option>
                <option>Salud</option>
                <option>Regalos</option>
              </select>
            
          </div>
          <div className="modal-content">
          <span>Selecciona fecha </span><DatePicker format="yyyy-MM" />
          </div>
          </div>
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
