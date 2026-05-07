import Navbar from "../components/Navbar";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import { Wallet, ArrowLeftRight, BarChart3, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useContext(BankContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="home-container">
        {/* HERO */}
        <section className="hero">
          <div>
            <h1>
              Bem-vindo, <span>{user?.name}</span>
            </h1>

            <p>
              Controle suas finanças, acompanhe transações e visualize seu desempenho
              financeiro em um só lugar.
            </p>

            <div className="hero-buttons">
              <button onClick={() => navigate("/dashboard")} className="primary-btn">
                Ver Dashboard
              </button>
              <button onClick={() => navigate("/statement")} className="secondary-btn">
                Nova Transação
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="feature-card">
            <Wallet size={32} />
            <h3>Controle Financeiro</h3>
            <p>Organize entradas e saídas de dinheiro com praticidade.</p>
          </div>

          <div className="feature-card">
            <ArrowLeftRight size={32} />
            <h3>Transações Rápidas</h3>
            <p>Envie e receba transferências de forma segura e instantânea.</p>
          </div>

          <div className="feature-card">
            <BarChart3 size={32} />
            <h3>Dashboard Inteligente</h3>
            <p>Visualize gráficos e acompanhe sua evolução financeira.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={32} />
            <h3>Segurança Total</h3>
            <p>Seus dados protegidos com autenticação e criptografia.</p>
          </div>
        </section>
      </div>
    </>
  );
}
