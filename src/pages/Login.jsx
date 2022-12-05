import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();
  const { user } = useAuthContext();
  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password);
    console.log(user);
  }

  return (
    <form
      className="flex flex-col justify-center self-center items-center gap-5 p-10 bg-blue rounded-xl text-xl text-neutral-400"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">LOGIN</h1>
      <div className="flex flex-col items-start">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="py-1 px-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="py-1 px-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        disabled={isLoading}
        className="btn w-full bg-cyan-800 py-1 rounded mt-2"
      >
        Login
      </button>
      {error ? (
        <div className="w-full self-start bg-red-200 bg-opacity-80 text-rose-600 text-opacity-70 font-semibold border-4 border-rose-600 border-opacity-40 rounded p-2">
          {error}
        </div>
      ) : null}
      <div className="flex items-center gap-1">
        <span className="text-sm">Not registered?</span>
        <Link
          to="/signup"
          className="text-sm text-cyan-800 font-semibold underline"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
