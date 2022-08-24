import "rsuite/styles/index.less";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../../firebaseConfig/init";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../Register/register.module.css";
import logo from "../../../assets/icomoon/logo1.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPasswordOne(event.target.value);
        break;
      case "password2":
        setPasswordTwo(event.target.value);
        break;
      default:
        break;
    }
  };

  // Validación formulario register

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validEmail = /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g;

    if (!validEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un correo electrónico válido",
      });
      return;
    }

    if (email === "" || passwordOne === "" || passwordTwo === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe llenar todos los campos",
      });
      return;
    }

    if (passwordOne !== passwordTwo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas deben ser iguales",
      });
      return;
    }

    try {
      await signUp(email, passwordOne);

      // alert se registró correctamente
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Su registro se ha realizado con éxito",
      });

      navigate("/dashboard");

      // manejo de errores de firebase
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Correo inválido",
          });
          break;

        case "auth/weak-password":
          Swal.fire({
            icon: "error",
            title: "La contraseña debe contener mínimo 6 caracteres",
          });
          break;

        case "auth/email-already-in-use":
          Swal.fire({
            icon: "error",
            title: "Cuenta ya registrada",
          });
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className={styles.ContainerLogin}>
      <img src={logo} className={styles.imgLogo} />
      <div className={styles.formContainer}>
        <div>
          <Form onSubmit={handleSubmit}>
            <h3> Crear cuenta </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword3">
              <Form.Control
                name="password"
                label="Password"
                type="password"
                autoComplete="off"
                placeholder="Contraseña"
                value={passwordOne}
                onChange={handleChange}
              />
                             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword4">
            <Form.Control
                name="password2"
                label="Password"
                type="password"
                autoComplete="off"
                placeholder="Repetir Contraseña"
                value={passwordTwo}
                onChange={handleChange}>

                </Form.Control>
            </Form.Group>
            <div className={styles.ContainerButton}>
            <style type="text/css">
                {`
                  .btn-purple {
                  background-color: #605DEC;
                  color: white;
                  }
                `}
              </style>
              <Button variant="purple" type="submit" className="mb-3">
                Crear cuenta
              </Button>
              <Link to="/" className="Link-register">
                Iniciar sesión
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
