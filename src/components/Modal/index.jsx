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
  const [mounth, setMounth] = React.useState("");

  const categorySelect = (e) => {
    setCategory(e.target.value);
  };
  const mounthSelect = (e) => {
    setMounth(e.target.value);
  };

  const [amount, setAmount] = React.useState("");

  const handleConfirm = async () => {
    const otra = await sendExpense(amount, category, mounth);
    Swal.fire({
      icon: "success",
      title: "Enviado",
      text: "Registro enviado",
    });
    amount === "" ? alert("campo vacio") : otra;
    handleClose();
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    (amount);
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
                <option>Entretenimiento</option>
                <option>Servicios</option>
                <option>Restaurantes</option>
                <option>Compras</option>
                <option>Salud</option>
                <option>Regalos</option>
                <option>Transportes</option>
              </select>
              
            </div>
            <div className="modal-content">
              <span>Mes</span>
              <select
                className="category-container"
                value={mounth}
                onChange={mounthSelect}
              >
                <option defaultValue={"1"}>Enero</option>
                <option defaultValue={"2"}>Febrero</option>
                <option defaultValue={"3"}>Marzo</option>
                <option defaultValue={"4"}>Abril</option>
                <option defaultValue={"5"}>Mayo</option>
                <option defaultValue={"6"}>Junio</option>
                <option defaultValue={"7"}>Julio</option>
                <option defaultValue={"8"}>Agosto</option>
                <option defaultValue={"9"}>Septiembre</option>
                <option defaultValue={"10"}>Octubre</option>
                <option defaultValue={"11"}>Noviembre</option>
                <option defaultValue={"12"}>Diciembre</option>
              </select> 
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleConfirm}
            className="button-modal"
            color="violet"
            appearance="subtle"
          >
            Guardar
          </Button>
          <Button
            onClick={handleClose}
            className="button-modal"
            appearance="subtle"
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
