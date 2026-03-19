import { useState, useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";

export default function Transactions() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [typeMsg, setTypeMsg] = useState("");

  const { addTransaction } = useContext(BankContext);

  function handle(type) {
    const numberValue = Number(value);
    if (!value || numberValue <= 0) {
      setTypeMsg("error");
      setMessage("Digite um valor válido");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    addTransaction(type, numberValue);

    setTypeMsg("success");
    setMessage(
      type === "deposit"
        ? `R$ ${numberValue} depositado com sucesso`
        : `R$ ${numberValue} sacado com sucesso`,
    );

    setValue("");
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <>
      <Navbar />

      {}
      <div className="container centered">
        <div className="form-box">
          <h1>Transações</h1>

          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) setValue(val);
            }}
          />

          <div className="buttons">
            <button onClick={() => handle("deposit")}>Depositar</button>
            <button onClick={() => handle("withdraw")}>Sacar</button>
          </div>

          {message && (
            <p className={`message ${typeMsg}`}>
              {typeMsg === "success" ? "✅ " : "❌ "}
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
