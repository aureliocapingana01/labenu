import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const verUsuario = (value) => {
    navigate(`/user/${value}`);
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/admin")}>Admin</button>

      <br />

      <button onClick={() => verUsuario("30")}>Usuário com ID</button>
    </>
  );
};
export default Header;
