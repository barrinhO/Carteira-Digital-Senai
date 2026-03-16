import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Transactions from "./screens/Transactions";
import Statement from "./screens/Statement";

import { BankProvider } from "./context/BankContext";

function App() {
  return (
    <BankProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/statement" element={<Statement />} />
        </Routes>
      </BrowserRouter>
    </BankProvider>
  );
}

export default App;
