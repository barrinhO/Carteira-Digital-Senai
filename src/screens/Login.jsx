import { useContext, useState } from "react";
import { BankContext } from "../context/BankContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(BankContext);
  const navigate = useNavigate();

  function handleLogin() {
    login(name);
    navigate("/home");
  }

  return (
    <div className="center">
      <h1>DevBank</h1>

      <input
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
