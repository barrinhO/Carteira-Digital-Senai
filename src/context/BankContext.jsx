import { createContext, useState } from "react";

export const BankContext = createContext();

export function BankProvider({ children }) {
  const [user, setUser] = useState(null);

  const [balance, setBalance] = useState(650);

  const [transactions, setTransactions] = useState([]);

  function login(name) {
    setUser({ name });
  }

  function addTransaction(type, value) {
    const newTransaction = {
      id: Date.now(),
      type,
      value,
    };

    setTransactions([...transactions, newTransaction]);

    if (type === "deposit") {
      setBalance(balance + value);
    }

    if (type === "withdraw") {
      setBalance(balance - value);
    }
  }

  return (
    <BankContext.Provider
      value={{
        user,
        login,
        balance,
        transactions,
        addTransaction,
      }}
    >
      {children}
    </BankContext.Provider>
  );
}
