import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3 className="navbar-text">DevBank</h3>

      <div className="navbar-buttons">
        <Link to = "/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/transactions">Transações</Link>
        <Link to="/statement">Extrato</Link>
      </div>
    </div>
  );
}
