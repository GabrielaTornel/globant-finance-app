import React from "react";
import PlusIcon from "@rsuite/icons/Plus";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import { editExpense } from "../../firebaseConfig/FirebaseExpense/editExpense";
import { getInfoSortCategory } from "../../Helpers/crud";
import "./index.css";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig/init";
import Swal from "sweetalert2";

export const ModalDescription = (props) => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [editInput, setEditInput] = React.useState("");

  const handleOpen = async (e) => {
    setCategory(await getInfoSortCategory(e.target.id));
    setOpen(true);
  };
  const handleInput = (e) => {
    e.preventDefault();
    setEditInput(e.target.value);
  };
  const handleClose = () => {
   setOpen(false);
  };
  const buttonEdit = async (id) => {
    try {
      const expenseRef = doc(db, "Gastos", id);
      const editExpenses = await updateDoc(expenseRef, {
        Monto: Number(editInput),
      }); Swal.fire("Su Monto ha sido Actualizado", "", "success");
    } catch (error) {
      (error);
    }
  };

  return (
    <>
      <ButtonToolbar>
        <Button id={props.id} onClick={handleOpen}>
          ➕
        </Button>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Gastos {props.id} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {category !== ""
            ? category.map((item, i) => (
                <li className="listCategory" key={i}>
                  {item.Category} Mes: {item.Fecha}
                  <input
                    className="input-itemsSort"
                    defaultValue={item.Monto}
                    onChange={handleInput}
                  /> 
                  .00{" "}
                  <button id={item.id} onClick={() => buttonEdit(item.id)}>
                    ✏️
                  </button>
                </li>
              ))
            : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
