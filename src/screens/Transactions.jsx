import { useState, useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";

export default function Transactions() {
  const [value, setValue] = useState("");

  const { addTransaction } = useContext(BankContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Transações</h1>

        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <div className="buttons">
          <button onClick={() => addTransaction("deposit", value)}>
            Depositar
          </button>

          <button onClick={() => addTransaction("withdraw", value)}>
            Sacar
          </button>
        </div>
      </div>
    </>
  );
}
