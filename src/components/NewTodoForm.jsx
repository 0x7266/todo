import { useState } from 'react';
//import useFetch from '../hooks/useFetch';
import { useTodosContext } from '../hooks/useTodosContext';
import OpenModalButton from './OpenModalButton';

export default function NewTodoForm() {
  const [todo, setTodo] = useState('');
  const { todos, dispatch } = useTodosContext();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/api/todo', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ text: todo, isCompleted: false }),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'CREATE_TODO', payload: data });
      setTodo('')
    }
  }

  return (
    <div className="w-full">
      <form
        className="flex gap-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          value={todo}
          className="py-1 px-2 rounded w-full"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-blue w-14 p-3 text-neutral-400 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
