import { Button } from "rsuite";
import "rsuite/styles/index.less";
import { Link } from "react-router-dom";
import { Form, Schema } from "rsuite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../../firebaseConfig/init.js";
import GooglePlusCircleIcon from '@rsuite/icons/legacy/GooglePlusCircle';

function Login() {
  const model = Schema.Model({
    email: Schema.Types.StringType().isEmail(
      "Please enter a valid email address."
    ),
    password: Schema.Types.StringType().isRequired("This field is required."),
  });
  const TextField = ({ name, label, accepter, ...rest }) => (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );

  const navigate = useNavigate();

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
        navigate("/*");
      });
  };
  return (
    <div className="App">
      <h3>Inicia sesión</h3>
      <Form model={model} /*  onSubmit={handleSubmit} */>
        <TextField
          name="email"
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          placeholder="Contraseña"
        />

        <Button appearance="primary" color="violet"  type="submit">
          Iniciar sesión
        </Button>
        <Button color="red" appearance="primary" type="submit" onClick={signInWithGoogle}>
      <GooglePlusCircleIcon /> Google
    </Button>
        
        <Link to="/register" className="Link-register">
          ¿ No tienes cuenta? Regístrate
        </Link>
      </Form>
     
    </div>
  );
}

export default Login;
