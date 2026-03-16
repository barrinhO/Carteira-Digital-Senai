import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";

export default function Statement() {
  const { transactions } = useContext(BankContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Extrato</h1>

        {transactions.map((t) => (
          <div key={t.id} className={`transaction ${t.type}`}>
            <p>{t.type === "deposit" ? "Depósito" : "Saque"}</p>
            <p>R$ {t.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
