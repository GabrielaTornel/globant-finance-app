
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icomoon/logo-1.png';
import { useAuth } from "../../firebaseConfig/init";

export function Header() {
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>loading</h1>;

  return (
    <div className="Container-Header">
      <div className="Content-HeaderInfo">
        <img src={logo} className="LogoHeader" alt="img" />
        <h3 data-testid="welcome" className="Welcome">
          Hola, {user.displayName || user.email}
        </h3>
      </div>
      <div className="Content-BtnLogOut">
        <button
          className="BtnLogOut"
          data-testid="btnLogOutGlobant"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}