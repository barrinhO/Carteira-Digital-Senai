import Navbar from "../components/Navbar";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import { formatarMoeda } from "../utils/format";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const { balance, transactions } = useContext(BankContext);

  let total = 0;
  const data = transactions.map((t, i) => {
    total += t.type === "deposit" ? t.value : -t.value;
    return { name: i + 1, valor: total };
  });

  const entradas = transactions.filter((t) => t.type === "deposit").length;
  const saidas = transactions.filter((t) => t.type === "withdraw").length;

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        {/* CARDS */}
        <div className="grid grid-2">
          <div className="card saldo">
            <h2>Saldo</h2>
            <p className="saldo-valor">{formatarMoeda(balance)}</p>
          </div>

          <div className="card">
            <h2>Transações</h2>
            <p>{transactions.length}</p>
          </div>
        </div>

        {/* GRÁFICO + RESUMO */}
        <div className="grid grid-dashboard">
          <div className="card">
            <h2>Movimentação</h2>

            <div className="chart-box">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="valor"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card resumo">
            <h2>Resumo</h2>

            <p>Entradas: {entradas}</p>
            <p>Saídas: {saidas}</p>

            <p className="saldo-resumo">{formatarMoeda(balance)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
