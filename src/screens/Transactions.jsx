import { useState, useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";
import { formatarMoeda } from "../utils/format";

export default function Transactions() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [typeMsg, setTypeMsg] = useState("");

  const { addTransaction } = useContext(BankContext);

  function addNumber(num) {
    if (value.length >= 10) return;
    setValue((prev) => prev + num);
  }

  function clearValue() {
    setValue("");
  }

  function removeLast() {
    setValue((prev) => prev.slice(0, -1));
  }

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
        ? `${formatarMoeda(numberValue)} depositado com sucesso`
        : `${formatarMoeda(numberValue)} sacado com sucesso`,
    );

    setValue("");

    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <>
      <Navbar />

      <div className="container centered">
        <div className="atm-box">
          <h1>Transações</h1>

          <div className="display">{value ? formatarMoeda(Number(value)) : "R$ 0,00"}</div>

          <div className="keypad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button key={num} className="key" onClick={() => addNumber(num.toString())}>
                {num}
              </button>
            ))}

            <button className="key action" onClick={clearValue}>
              C
            </button>

            <button className="key" onClick={() => addNumber("0")}>
              0
            </button>

            <button className="key action" onClick={removeLast}>
              ⌫
            </button>
          </div>

          <div className="buttons">
            <button className="deposit" onClick={() => handle("deposit")}>
              Depositar
            </button>

            <button className="withdraw" onClick={() => handle("withdraw")}>
              Sacar
            </button>
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
