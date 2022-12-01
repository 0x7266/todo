import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <form className="flex flex-col h-4/5 justify-center items-center gap-5 p-4 text-xl text-neutral-400">
      <h1 className="text-2xl font-semibold">LOGIN</h1>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="py-1 px-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="py-1 px-2 rounded"
        />
      </div>
      <button className="btn w-full bg-blue py-1 rounded">Login</button>
      <Link
        to="/signup"
        className="text-sm text-cyan-800 font-semibold underline"
      >
        Sign up
      </Link>
    </form>
  );
}
