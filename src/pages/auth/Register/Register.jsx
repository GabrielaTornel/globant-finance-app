
import 'rsuite/styles/index.less'
import React from 'react'
  import { Form, Schema } from 'rsuite';
  import { Link, useNavigate} from 'react-router-dom';
  import Button from 'rsuite/Button';
  import { useState } from 'react';
  import { signUp } from '../../../firebaseConfig/init';
  import Swal from 'sweetalert2'


//propiedades de la libreria 
  const model = Schema.Model({
    email: Schema.Types.StringType().isEmail('Please enter a valid email address.'), 
    password: Schema.Types.StringType().isRequired('This field is required.'),
  });

  const TextField = ({ name, label, accepter, ...rest }) => (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );

  function Register() {
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = (e) =>{
      switch (e.target.name) {
        case "email":
          setEmail(e.target.value)
          break;
        case "password":
          setPasswordOne(e.target.value)
          break;
        case "password-two":
          setPasswordTwo(e.target.value)
          break;
        default:
          break;
      }
      
    }
      

    const handleSubmit =async(e) => {
     
      if(email==="" || passwordOne==="" || passwordTwo===""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe llenar todos los campos',
          
        })
        return;

      }
      if (passwordOne !== passwordTwo){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas deben ser iguales',
          
        })
        return;
      }

      try {
        await signUp(email, passwordOne);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Ha iniciado sesión con éxito'
        })

        navigate("/dashboard")

        
      } catch (error) {

        switch (error.code) {
          case 'auth/invalid-email':
            Swal.fire({
              icon: 'error',
              title: 'Correo inválido',        
              
            })
            break;
        
            case 'auth/weak-password':
            Swal.fire({
              icon: 'error',
              title: 'La contraseña debe contener mínimo 6 caracteres',        
              
            })
            break;

            case 'auth/email-already-in-use':
            Swal.fire({
              icon: 'error',
              title: 'Cuenta ya registrada',        
              
            })
            break;

          default:
            break;
        }
        
        
        
      }

      
    }
   


    return (
<div>

      <h3>Crear cuenta</h3>
      <Form onSubmit={handleSubmit}>
      <input name="email"  type="email" placeholder="Correo electrónico"  onChange={handleChange} value={email}></input> 
      <input name="password" type="password" placeholder="Contraseña"  onChange={handleChange} value={passwordOne}></input> 
      <input name="password-two" type="password" placeholder="Repetir contraseña"  onChange={handleChange} value={passwordTwo}></input> 
     
      <Button appearance="primary" type="submit" >
        Crear cuenta
      </Button> 
      <Link to='/' className='Link-register'>
      Iniciar sesión
          </Link>
          </Form>
    </div>
    );
  }

  export default Register