import Navbar from "../components/Navbar";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";

export default function Home() {
  const { user } = useContext(BankContext);
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Bem vindo ao DevBank {user?.name}</h1>
      </div>
    </>
  );
}
