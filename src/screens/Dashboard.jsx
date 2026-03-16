import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { balance } = useContext(BankContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <div className="card">
          <h2>Saldo atual</h2>
          <p>R$ {balance}</p>
        </div>
      </div>
    </>
  );
}
