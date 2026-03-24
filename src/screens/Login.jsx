import { useContext, useState } from "react";
import { BankContext } from "../context/BankContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(BankContext);
  const navigate = useNavigate();

  function handleLogin() {
    if (!name.trim()) {
      alert("Digite seu nome");
      return;
    }

    login(name.trim());
    navigate("/home");
  }

  return (
    <div className="center">
      <h1>DevBank</h1>

      {}
      <div className="form-box">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
