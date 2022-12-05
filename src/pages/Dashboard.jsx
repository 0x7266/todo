import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewTodoForm from '../components/NewTodoForm';
import Todo from '../components/Todo';
import { useAuthContext } from '../hooks/useAuthContext';
import { useTodosContext } from '../hooks/useTodosContext';

export default function Dashboard() {
  const [change, setChange] = useState(0);
  const { todos, dispatch } = useTodosContext();
  const { user } = useAuthContext();

  async function getTodos() {
    const response = await fetch('/api/todo', {
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: 'SET_TODOS', payload: data });
  }
  console.log('render');
  useEffect(() => {
    if (user) {
      getTodos();
    }
  }, [change]);
  return (
    <div className="w-full sm:w-[600px] flex flex-col items-center gap-10 px-2 sm:px-0">
      <Navbar />
      <NewTodoForm />
      <div className="flex flex-col gap-2 w-full">
        {user ? (
          todos ? (
            todos.map((todo, index) => (
              <Todo
                setChange={setChange}
                key={index}
                todo={todo}
              />
            ))
          ) : (
            <div className="loader" />
          )
        ) : (
          <div className="flex flex-col items-center gap-1">
            <Link to="/login">
              <button className="bg-blue py-3 px-6  text-neutral-400 rounded mx-auto">
                Login
              </button>
            </Link>
            <div className="flex items-center gap-1">
              <span className="text-sm">Not registered?</span>
              <Link
                to="/signup"
                className="text-sm text-cyan-800 font-semibold underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
