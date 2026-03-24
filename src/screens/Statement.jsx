import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";
import { formatarMoeda } from "../utils/format";

export default function Statement() {
  const { transactions } = useContext(BankContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Extrato</h1>

        {transactions.length === 0 && <p>Nenhuma transação ainda</p>}

        {transactions.map((t) => (
          <div key={t.id} className={`transaction ${t.type}`}>
            <div>
              <p className="title">{t.type === "deposit" ? "Depósito" : "Saque"}</p>
            </div>

            <p className={t.type === "deposit" ? "green" : "red"}>
              {t.type === "withdraw" && "- "}
              {formatarMoeda(t.value)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
