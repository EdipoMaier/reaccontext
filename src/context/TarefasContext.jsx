import { createContext, useContext, useEffect, useState } from 'react';

const Tarefas = createContext({});

const TarefasProvider = ({ children }) => {
  const [quantidade, setQuantidade] = useState(0);

  const values = {
    quantidade,
    setQuantidade
  };

  return <Tarefas.Provider value={values}>{children}</Tarefas.Provider>;
};

const useTarefas = () => {
  const context = useContext(Tarefas);

  if (!context) {
    throw new Error('useTarefas must be used within a TarefasProvider');
  }

  return context;
};

export { TarefasProvider, useTarefas };