
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../firebaseConfig/init";
import Logo from "../../assets/icomoon/logo1.png";
import Logout from "../../assets/icomoon/logout.png";
import "./Header.css";

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
  const emailUser = localStorage.email
  return (
    <div className="Container-Header">
      <div className="header">
      <div className="nav-logo"><img src= {Logo}></img>
        <h5 className="greeting">
          Hola! {emailUser}</h5>
      </div>
        <button
          className="contanier-BtnLogOut"
          data-testid="btnLogOutGlobant"
          onClick={handleLogout}
        >
          <img src= {Logout} className="BtnLogOut"></img>
        </button>
      </div>
    </div>
  );
}