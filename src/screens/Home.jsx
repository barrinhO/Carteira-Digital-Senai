import Navbar from "../components/Navbar";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";

export default function Home() {
  const { user } = useContext(BankContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Bem-vindo, {user?.name}</h1>

        <div className="card">
          <h2>DevBank</h2>
          <p>Gerencie seu dinheiro com facilidade</p>
        </div>
      </div>
    </>
  );
}
