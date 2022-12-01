import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NewTodoForm from '../components/NewTodoForm';
import OpenModalButton from '../components/OpenModalButton';
import Todo from '../components/Todo';
import { useTodosContext } from '../hooks/useTodosContext';

export default function Dashboard() {
  const { todos, dispatch } = useTodosContext();

  async function getTodos() {
    const response = await fetch('/api/todo');
    const data = await response.json();
    dispatch({ type: 'SET_TODOS', payload: data });
  }

  useEffect(() => {
    getTodos();
  }, [todos]);
  return (
    <div className="w-full sm:w-[600px] flex flex-col items-center gap-10 px-2 sm:px-0">
      <Navbar />
      <NewTodoForm />
      <div className="flex flex-col gap-2 w-full">
        {todos ? (
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
            />
          ))
        ) : (
          <div className="loader" />
        )}
      </div>
    </div>
  );
}
