import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { balance, transactions } = useContext(BankContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <div className="grid grid-2">
          <div className="card">
            <h2>Saldo atual</h2>
            <p>R$ {balance}</p>
          </div>

          <div className="card">
            <h2>Total de transações</h2>
            <p>{transactions?.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
