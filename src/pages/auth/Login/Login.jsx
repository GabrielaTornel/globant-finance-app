import "rsuite/styles/index.less";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../../firebaseConfig/init.js";
import { loginWithEmailAndPassword } from "../../../firebaseConfig/init";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  //Validación de formulario

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

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe llenar todos los campos",
      });
      return;
    }

    try {
      await loginWithEmailAndPassword(email, password);
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
        title: "Ha iniciado sesión con éxito",
      });

      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          Swal.fire({
            icon: "error",
            title: "La contraseña no es correcta.",
          });
          break;
        case "auth/user-not-found":
          Swal.fire({
            icon: "error",
            title: "Por favor, regístrate",
            text: "No se encontro ninguna cuenta con este correo electrónico.",
          });
          navigate("/register");
          break;
        default:
          Swal.fire({
            icon: "error",
            title: "Hubo un error al intentar crear la cuenta.",
          });
          break;
      }
    }
  };

  const signInWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        const displayNameUser = res.user.displayName;
        const emailUser = res.user.email;
        //actualiza un valor si la clave ya existe
        localStorage.setItem("name", displayNameUser);
        localStorage.setItem("email", emailUser);
        navigate("/dashboard");
      })
      .catch((error) => {
        navigate("/");
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            label="Password"
            type="password"
            autoComplete="off"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesion
        </Button>
        <Button variant="primary" type="submit" onClick={signInWithGoogle}>
          Google
        </Button>
        <Link to="/register" className="Link-register">
          ¿No tienes cuenta? Regístrate
        </Link>
      </Form>
    </>
  );
};

export default Login;
