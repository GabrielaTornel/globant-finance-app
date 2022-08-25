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
import Swal from "sweetalert2";
import { sendExpense } from "../../Helpers/crud";

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

  const handleConfirm = async () => {
   await sendExpense(amount, category)
    Swal.fire({
      icon: "success",
      title: "Enviado",
      text: "Registro enviado",
    });
    handleClose();
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };
  return (
    <>
      <hr />
      <ButtonToolbar>
        <Button color="violet" appearance="primary" onClick={handleOpen}>
          Ingresar Gastos
        </Button>
      </ButtonToolbar>

      <Modal
        className="modalContainer"
        overflow={overflow}
        open={open}
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title className="title-modal">Nuevo gasto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-modal">
            <div className="modal-content-amount">
              <span>Total COP$ </span>
              <input
                title=""
                type="text"
                className="amount"
                onChange={handleChangeAmount}
                eventkey={amount}
              />
              .00
            </div>
            <div className="modal-content">
              <span>Tipo de gasto </span>
              <select
                className="category-container"
                value={category}
                onChange={categorySelect}
              >
                <option>Familia</option>
                <option>Salud</option>
                <option>Transporte</option>
                <option>Comestibles</option>
                <option>Restaurantes</option>
                <option>Ocio</option>
                <option>Regalos</option>
                <option>Compras</option>
                
              </select>
            </div>
            <div className="modal-content">
              <span>Selecciona mes </span>
              <select
                className="category-container"
                value={category}
                onChange={categorySelect}
                >
                 <option>Enero</option>
                 <option>Febrero</option>
                 <option>Marzo</option>
                 <option>Abril</option>
                 <option>Mayo</option>
                 <option>Junio</option>
                 <option>Julio</option>
                 <option>Agosto</option>
                 <option>Septiembre</option>
                 <option>Octubre</option>
                 <option>Noviembre</option>
                 <option>Diciembre</option> 
                 </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleConfirm}
            className="button-modal"
            appearance="subtle"
          >
            Guardar
          </Button>
          <Button onClick={handleClose} className="button-modal" appearance="subtle">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
