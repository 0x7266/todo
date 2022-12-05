import { useAuthContext } from './useAuthContext';
import { useTodosContext } from './useTodosContext';

export function useLogout() {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: todosDispatch } = useTodosContext();

  function logout() {
    localStorage.removeItem('user');
    authDispatch({ type: 'LOGOUT' });
    todosDispatch({ type: 'SET_TODOS', payload: null });
  }
  return { logout };
}
