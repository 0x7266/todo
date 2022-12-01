import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw Error('useTodosContext must be used inside an TodosContextProvider');
  }

  return context;
}
